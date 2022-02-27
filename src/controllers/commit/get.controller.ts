import { Request, Response } from "express";
import { isBoolean, isNumber } from "lodash";
import { customFetch } from "../../services/customFetch";
import { iCommitAll } from "../../types/commit/commitAll.types";

const getAll = async (req: Request, res: Response) => {
  const { user, repository } = req.params;

  const url = `/repos/${user}/${repository}/commits`;

  const data: iCommitAll[] = await customFetch(url);
  if (isNumber(data)) res.sendStatus(data);
  
  res.send({
    path: "getAllCommits",
    data,
  });
};

export default {
  getAll,
  // ...
};
