import setUpRoutes from '@config/router';
import express from 'express';

import { MongoHelper } from './databse/helpers';
import { environment } from './config/environment';

async function start() {
  try {
    MongoHelper.connect(environment.mongoUrl);

    const PORT = process.env.PORT || 5000;
    const app = express();

    setUpRoutes(app);

    app.listen(PORT, () => {
      console.log('server listening on port:5000');
    });
  } catch (error) {
    console.log(error);
  }
}

start().then();
