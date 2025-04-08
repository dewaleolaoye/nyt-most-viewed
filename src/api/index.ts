import { config } from "@/config";
import { IArticlesRO, IError } from "@/types";
import axios, { AxiosResponse } from "axios";

export const getArticles = async (period?: number): Promise<IArticlesRO> => {
  const BASE_URL = `${config.API_URL}/${period ?? 1}.json?api-key=${config.API_KEY}`;

  try {
    const response = await axios.get(BASE_URL) as AxiosResponse<IArticlesRO>;

    return response.data;
  } catch (error) {

    const _err = error as unknown as { response?: IError; };

    if (_err.response?.data) {
      throw new Error(_err.response.data.fault.faultstring);
    }

    throw new Error("An unexpected error occurred");
  }
};