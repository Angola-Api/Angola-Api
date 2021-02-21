import setUpRoutes from '@config/router';
import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

setUpRoutes(app);

app.listen(PORT);
