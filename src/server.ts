import setUpRoutes from "@config/router";
import express from "express";
import * as cors from 'cors';
import mongoose, { Mongoose } from "mongoose";

import { environment } from "./config/environment";

const uri = process.env.MONGO_URL;

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

async function start() {
  try {
    const app = express();

    app.use(cors.default(options));

    setUpRoutes(app);

 await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log(err + "Error to connect on database atlas");
      });

    app.listen(environment.port, () => {
      console.log("server listening on port:5000");
    });
  } catch (error) {
    console.error(error);
  }
}

start().then();
