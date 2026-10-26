import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const EXTRACT_DIR = '/tmp/reswatch-assets';
const ZIP_PATH = path.resolve(__dirname, '4058b359-d15c-48c5-835b-d15286b55feb.zip');

function ensureWatchAssets() {
  if (!fs.existsSync(path.join(EXTRACT_DIR, 'base.stl')) && fs.existsSync(ZIP_PATH)) {
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });
    try {
      execSync(`unzip -o "${ZIP_PATH}" -d "${EXTRACT_DIR}"`, { stdio: 'ignore' });
    } catch (e) {
      console.error('Failed to extract watch zip:', e);
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-watch-zip-assets',
      configureServer(server) {
        ensureWatchAssets();
        server.middlewares.use('/assets/watch', (req, res, next) => {
          const cleanUrl = (req.url || '').split('?')[0].replace(/^\/+/, '');
          const filePath = path.join(EXTRACT_DIR, cleanUrl);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeMap: Record<string, string> = {
              '.stl': 'model/stl',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
            };
            res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
          next();
        });
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
