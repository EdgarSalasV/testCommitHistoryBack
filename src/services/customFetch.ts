import axios, { AxiosError } from "axios";
const { API_GIT } = process.env;

/**
 * Initialize and invoke the customFetch function.
 * Params => URL: string 
 * Return => data: any | errorStatus: Number
 */
export const customFetch = async (url: string): Promise<any | number> =>
  {
    try {
      const { data }: any = await axios.get(`${API_GIT}${url}`);
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status ? error.response?.status : 500;
        console.error("error", error);
        return status;
      } else {
        console.error("error", error);
        throw 500;
      }
    }
  };
