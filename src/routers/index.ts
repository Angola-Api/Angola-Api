import express from 'express';
import {taxaBnaController} from '../useCases/taxaBnaUseCases'
import {taxasLuiborController} from "../useCases/taxasLuiborUseCases"

const router = express.Router();


router.get('/taxa-de-juros/bna', async (req, res) => {
  return taxaBnaController.handle(req, res);
})

router.get('/taxa-de-juros/luibor', async (req, res) => {
  return taxasLuiborController.handle(req, res);
})


export default router