import express from 'express';
import cors from 'cors';
import { PythonShell } from 'python-shell';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();
  const port = 3001;

  app.use(cors());
  app.use(express.json());

  // API endpoints
  app.post('/api/run-python-tests', (req, res) => {
    const { scriptPath } = req.body;
    
    if (!scriptPath) {
      return res.status(400).json({ error: 'Script path is required' });
    }

    const fullPath = join(__dirname, '..', scriptPath);
    
    let options = {
      mode: 'text',
      pythonOptions: ['-u'], // unbuffered output
      scriptPath: dirname(fullPath),
      args: []
    };

    PythonShell.run(fullPath, options)
      .then(results => {
        res.json({ success: true, output: results });
      })
      .catch(err => {
        console.error('Python script error:', err);
        res.status(500).json({ error: err.message });
      });
  });

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();