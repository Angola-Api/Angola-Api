import express from "express";
import router from "./routers";

const app = express();

app.use(router);
const PORT = process.env.PORT || 5000;

app.listen(PORT);
