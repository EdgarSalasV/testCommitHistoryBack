import { Router, Request, Response } from "express";
import { get } from "../controllers/commit";

const router: Router = Router();

router.get("/commit/all", get.getAll);
router.get("/commit/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  console.log("ORA PERRO", id);
  res.send("OLI");
});

export default router;
