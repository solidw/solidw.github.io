import express from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import next from 'next';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
    server.get('*', (req: IncomingMessage, res: ServerResponse) => {
      return handle(req, res);
    });
    server.listen(3000, () => {
      console.log('server ready on port 3000');
    });
  })
  .catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
  });
