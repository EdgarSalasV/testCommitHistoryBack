import { Request, Response } from "express";

const getAll = (req: Request, res: Response) => {
  const { id } = req.params;

  console.log("ORA PERRO", id);
  res.send("OLI");
}

export default {
  getAll,
  // ...
}