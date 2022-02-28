import { Request, Response } from "express";
import { isNumber } from "lodash";
import { customFetch } from "../../services/customFetch";
import { iCommit } from "../../types/commit/commit.types";
import { iCommitAll } from "../../types/commit/commitAll.types";

const getAll = async (req: Request, res: Response) => {
  const { user, repository } = req.params;

  const url = `/repos/${user}/${repository}/commits`;

  const data: iCommitAll[] = await customFetch(url);
  if (isNumber(data)) res.sendStatus(data);

  res.send({
    path: "getAllCommits",
    count: data.length,
    data,
  });
};

const getById = async (req: Request, res: Response) => {
  const { user, repository, id } = req.params;

  const url = `/repos/${user}/${repository}/gitt/commits/${id}`;
  
  const data: iCommit = await customFetch(url);
  if (isNumber(data)) res.sendStatus(data);

  res.send({
    path: "getCommitById",
    count: 1,
    data,
  });
};

export default {
  getAll,
  getById
};
