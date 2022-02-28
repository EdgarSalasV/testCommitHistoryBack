import { Request, Response } from "express";
import { isNumber } from "lodash";
import { customFetch } from "../../services/customFetch";
import { iRepository } from "../../types/repository/repository.types";

const BACKEND_REPOS = process.env.BACKEND_REPOS
  ? process.env.BACKEND_REPOS.split(",")
  : [];
const FRONTEND_REPOS = process.env.FRONTEND_REPOS
  ? process.env.FRONTEND_REPOS.split(",")
  : [];
const REPOS = [...BACKEND_REPOS, ...FRONTEND_REPOS];

const getAll = async (req: Request, res: Response) => {
  const { user } = req.params;

  const url = `/users/${user}/repos`;

  const data: iRepository[] = await customFetch(url);
  if (isNumber(data)) res.sendStatus(data);

  const dataFiltered = data.filter(({ name }) => REPOS.includes(name));

  res.send({
    path: "getAllrepositorys",
    count: dataFiltered.length,
    data: dataFiltered,
  });
};

const getById = async (req: Request, res: Response) => {
  const { user, repository, id } = req.params;

  const url = `/repos/${user}/${repository}`;

  const data: iRepository = await customFetch(url);
  if (isNumber(data)) res.sendStatus(data);

  res.send({
    path: "getRepositoryById",
    count: 1,
    data,
  });
};

export default {
  getAll,
  getById,
};
