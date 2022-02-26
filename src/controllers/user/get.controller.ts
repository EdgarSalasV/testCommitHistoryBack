import { Request, Response } from "express";

const getAll = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("getAllUser");
}

export default {
  getAll,
  // ...
}