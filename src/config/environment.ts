import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  port: process.env.PORT || 5000,
};
