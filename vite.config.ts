import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ZIP_PATH = path.resolve(__dirname, '4058b359-d15c-48c5-835b-d15286b55feb.zip');
const PUBLIC_WATCH_DIR = path.resolve(__dirname, 'public/assets/watch');

function ensureWatchStlInPublic() {
  const stlPath = path.join(PUBLIC_WATCH_DIR, 'base.stl');
  if (!fs.existsSync(stlPath) && fs.existsSync(ZIP_PATH)) {
    fs.mkdirSync(PUBLIC_WATCH_DIR, { recursive: true });
    try {
      execSync(`unzip -o "${ZIP_PATH}" base.stl -d "${PUBLIC_WATCH_DIR}"`, { stdio: 'ignore' });
    } catch (e) {
      console.error('Failed to extract base.stl from zip:', e);
    }
  }
}

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/reswatch.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  plugins: [
    react(),
    {
      name: 'ensure-watch-stl-assets',
      buildStart() {
        ensureWatchStlInPublic();
      },
      configureServer() {
        ensureWatchStlInPublic();
      },
    },
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
});
