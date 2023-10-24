import express, { Router } from "express";
import path from "path";

const indexRouter = (router = Router()) => {
  router.get("/", (req: express.Request, res: express.Response) => {
    return res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  });
  router.use(
    "/icons/",
    express.static(path.join(__dirname, "..", "views", "icons"))
  );

  return router;
};

export default indexRouter;
