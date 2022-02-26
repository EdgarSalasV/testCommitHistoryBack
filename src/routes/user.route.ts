import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/all", (req: Request, res: Response) => {
  res.send("test all");
});

router.get("git/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  console.log("ORA PERRO", id);
  res.send("test git");
});

export default router;
