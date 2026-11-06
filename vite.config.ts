import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function dualModePlugin(): Plugin {
  return {
    name: 'dual-mode-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // Swap static bundle tags with /src/main.tsx during dev and build
        let result = html;
        result = result.replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/index\.css">\s*/g, '');
        result = result.replace(
          /<script type="module" crossorigin src="\.\/assets\/index\.js"><\/script>/g,
          '<script type="module" src="/src/main.tsx"></script>'
        );
        return result;
      },
    },
    closeBundle() {
      const rootDir = process.cwd();
      const distDir = path.resolve(rootDir, 'dist');
      const distIndex = path.join(distDir, 'index.html');
      const root404 = path.join(rootDir, '404.html');
      const dist404 = path.join(distDir, '404.html');
      const rootNoJekyll = path.join(rootDir, '.nojekyll');
      const distNoJekyll = path.join(distDir, '.nojekyll');
      const distAssets = path.join(distDir, 'assets');
      const rootAssets = path.join(rootDir, 'assets');

      try {
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, root404);
          fs.copyFileSync(distIndex, dist404);
          fs.writeFileSync(rootNoJekyll, '');
          fs.writeFileSync(distNoJekyll, '');
        }

        if (fs.existsSync(distAssets)) {
          if (!fs.existsSync(rootAssets)) {
            fs.mkdirSync(rootAssets, { recursive: true });
          }
          const files = fs.readdirSync(distAssets);
          for (const file of files) {
            fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, file));
          }
        }
      } catch (err) {
        console.warn('Could not sync root files for GitHub Pages:', err);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), dualModePlugin()],
    base: './',
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/index.js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            if (name.endsWith('.css') || (assetInfo.names && assetInfo.names.some(n => n.endsWith('.css')))) {
              return 'assets/index.css';
            }
            return 'assets/[name].[ext]';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
