import axios, { AxiosError } from "axios";
const { API_GIT } = process.env;

export const customFetch = async (url: string): Promise<any | number> =>
  // url, method, {}
  {
    try {
      const { data } = await axios.get(`${API_GIT}${url}`);
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status ? error.response?.status : 500;
        console.error("error", error);
        throw status;
      } else {
        console.error("error", error);
        throw 500;
      }
    }
  };
