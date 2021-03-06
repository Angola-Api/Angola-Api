import setUpRoutes from '@config/router';
import express from 'express';
import { environment } from './config/environment';
import { MongoHelper } from './databse/helpers';


async function start() {
  try {
    MongoHelper.connect(environment.mongoUrl);
    const app = express();

    setUpRoutes(app);

    app.listen(environment.port, () => {
      console.log('server listening on port:5000');
    });
  } catch (error) {
    throw new Error(`Unable to connect to the server${error}`);
  }
}

start().then();
