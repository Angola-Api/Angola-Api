import {Request, Response} from 'express';
import Divisas from "src/services/divisas";


async function index(req: Request, res: Response) {
  const divisa = await Divisas();
  return res.json(divisa);
}

export default {
  index,
}