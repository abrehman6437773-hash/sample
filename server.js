/**
 * Dreamy Midnight Birthday Server
 * Supports both Express (if installed) and Node.js built-in HTTP server fallback.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function startServer() {
  try {
    // Attempt to use Express if available
    const express = require('express');
    const app = express();

    app.use(express.static(PUBLIC_DIR));

    app.get('*', (req, res) => {
      // Don't serve index.html for missing static assets
      if (path.extname(req.path)) {
        return res.status(404).send('Asset not found');
      }
      res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
    });

    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`\n======================================================`);
        console.log(`  ✨ DREAMY MIDNIGHT BIRTHDAY - MUNIZA SHAHEEN ✨`);
        console.log(`  Local server running at: http://localhost:${PORT}`);
        console.log(`======================================================\n`);
      });
    }

    module.exports = app;
  } catch (err) {
    // Built-in HTTP server fallback (zero external dependencies required)
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
      }

      const filePath = path.join(PUBLIC_DIR, reqPath);

      // Security check: ensure path is within PUBLIC_DIR
      if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
      }

      fs.stat(filePath, (statErr, stats) => {
        if (statErr || !stats.isFile()) {
          // Fallback to index.html for SPA routing if needed
          const fallbackPath = path.join(PUBLIC_DIR, 'index.html');
          fs.readFile(fallbackPath, (fallbackErr, content) => {
            if (fallbackErr) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(content);
          });
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
          if (readErr) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('500 Internal Server Error');
          }
          res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
          });
          res.end(content);
        });
      });
    });

    server.listen(PORT, () => {
      console.log(`\n======================================================`);
      console.log(`  ✨ DREAMY MIDNIGHT BIRTHDAY - MUNIZA SHAHEEN ✨`);
      console.log(`  Local server running at: http://localhost:${PORT}`);
      console.log(`======================================================\n`);
    });
  }
}

startServer();
