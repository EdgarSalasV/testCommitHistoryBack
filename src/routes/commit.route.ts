import { Router, Request, Response } from "express";
import { get } from "../controllers/commit";

const router: Router = Router();

router.get("/commit/all/:user/:repository", get.getAll);

router
  .route("/commit/:user/:repository/:id")
  .get((req: Request, res: Response) => get.getById(req, res))
  .post((req: Request, res: Response) => res.send("post"))
  .put((req: Request, res: Response) => res.send("put"))
  .delete((req: Request, res: Response) => res.send("delete"));

export default router;
