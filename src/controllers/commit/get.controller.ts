import { Request, Response } from "express";
import axios, { AxiosError } from "axios";
const { API_GIT } = process.env;

const getAll = async (req: Request, res: Response) => {
  const { user, repository } = req.params;

  const URL = `${API_GIT}/repos/${user}/${repository}/commits`;
  try {
    const { data } = await axios.get(URL);
    console.log('data', data)
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ? error.response?.status : 500;
      console.error("error", error);
      res.sendStatus(status);
    } else {
      console.error("error", error);
    }
  }
  // console.log('data', data)
  res.send("getAllCommits");
};

export default {
  getAll,
  // ...
};
