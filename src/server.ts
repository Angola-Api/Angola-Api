import setUpRoutes from '@config/router';
import express from 'express';

import { environment } from './config/environment';

async function start() {
  try {
    const app = express();

    setUpRoutes(app);

    app.listen(environment.port, () => {
      console.log('server listening on port:5000');
    });
  } catch (error) {
    console.error(error);
  }
}

start().then();
