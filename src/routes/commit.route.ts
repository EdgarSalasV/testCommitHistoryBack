import { Router, Request, Response } from "express";
import { get } from "../controllers/commit";

const router: Router = Router();

router.get("/commit/:user/:repository/all", get.getAll);

router.route("/commit/:id")
  .get((req: Request, res: Response) => {
    const { id } = req.params;
    res.send("GetCommitById");
  })
  .post((req: Request, res: Response)=> res.send("post"))
  .put((req: Request, res: Response)=> res.send("put"))
  .delete((req: Request, res: Response)=> res.send("delete"));

export default router;
