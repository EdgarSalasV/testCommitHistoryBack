import { Router, Request, Response } from "express";
import { get } from "../controllers/repository";

const router: Router = Router();

router.get("/repository/:user/repos", get.getAll);

router
  .route("/repository/:user/:repository")
  .get((req: Request, res: Response) => get.getById(req, res))
  .post((req: Request, res: Response) => res.send("post"))
  .put((req: Request, res: Response) => res.send("put"))
  .delete((req: Request, res: Response) => res.send("delete"));

export default router;
