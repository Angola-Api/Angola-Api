import setUpRoutes from '@config/router';
import express from 'express';

import { MongoHelper } from './databse/helpers';
import { environment } from './config/environment';

async function start() {
  try {
    MongoHelper.connect(environment.mongoUrl);
    const app = express();

    setUpRoutes(app);

    app.listen(environment.port, () => {
      console.log(`server running on http://localhost:${environment.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start().then();
