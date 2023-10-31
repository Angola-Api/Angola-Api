import * as dotenv from "dotenv";

dotenv.config();

export const environment = {
  port: process.env.PORT || 5000,
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
  biUrl: process.env.SEPE || "",
  dbPath: process.env.SQLITE_PATH
};
