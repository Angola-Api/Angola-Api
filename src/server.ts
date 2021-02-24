import setUpRoutes from '@config/router';
import express from 'express';

import mongoose from 'mongoose';
import { environment } from './config/environment';

async function start() {
  try {
    await mongoose.connect(environment.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    const PORT = process.env.PORT || 5000;
    const app = express();

    setUpRoutes(app);

    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}

start().then();
