import express, { Router } from "express";
import path from "path";

const DocsRouter = (router = Router()) => {
  router.get('/docs', (req: express.Request, res: express.Response) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'versions', 'v1', 'docs.html'));
  })

  router.use('/icons/', express.static(path.join(__dirname, '..', 'views', 'icons')));

  return router;
}

export default DocsRouter;