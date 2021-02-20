import express from 'express';
import {taxaBnaController} from '../useCases/taxaBnaUseCases'
import {taxasLuiborController} from "../useCases/taxasLuiborUseCases"

const router = express.Router();


router.get('/taxa-de-juro/bna', async (req, res) => {
  return taxaBnaController.handle(req, res);
})

router.get('/taxa-de-juro/luibor', async (req, res) => {
  return taxasLuiborController.handle(req, res);
})


export default router