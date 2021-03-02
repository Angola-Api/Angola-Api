import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT || 5000,
};
