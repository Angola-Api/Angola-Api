import express from 'express';
import {taxaBnaController} from '../useCases/taxaBnaUseCases'

const router = express.Router();


router.get('/', (req, res) => {
  return res.json({hello: 'world'});
})

router.get('/taxa-de-juros/bna', async (req, res) => {
  return taxaBnaController.handle(req, res);
})

export default router