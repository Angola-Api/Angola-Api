import setUpRoutes from "@config/router";
import express from "express";
import mongoose, { Mongoose } from "mongoose";

import { environment } from "./config/environment";

const uri = process.env.MONGO_URL;

async function start() {
  try {
    const app = express();

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
