import express from 'express';
import {taxaBnaController} from '../useCases/taxaBnaUseCases'
import {taxaLuiborController} from "../useCases/taxaLuiborUseCases"
import {taxaInflacaoController} from "../useCases/taxaInflacaoUseCases"

const router = express.Router();


router.get('/taxa-de-juro/bna', async (req, res) => {
  return taxaBnaController.handle(req, res);
})

router.get('/taxa-de-juro/luibor', async (req, res) => {
  return taxaLuiborController.handle(req, res);
})

router.get('/taxa-de-inflacao', async (req, res) => {
  return taxaInflacaoController.handle(req, res);
})

export default router