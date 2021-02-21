import express from 'express';
import {rateBnaController} from '../useCases/rateBnaUseCases'
import {taxaLuiborController} from "../useCases/taxaLuiborUseCases"
import {taxaInflacaoController} from "../useCases/taxaInflacaoUseCases"

const router = express.Router();


router.get('/banks/rate/interest/bna', async (req, res) => {
  return rateBnaController.handle(req, res);
})

router.get('/banks/rate/interest/luibor', async (req, res) => {
  return taxaLuiborController.handle(req, res);
})

router.get('/banks/rate/inflation', async (req, res) => {
  return taxaInflacaoController.handle(req, res);
})

export default router