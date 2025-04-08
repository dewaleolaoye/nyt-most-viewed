import { config } from "@/config";
import { IArticlesRO } from "@/types";
import axios, { AxiosResponse } from "axios";

export const getArticles = async (period?: number): Promise<IArticlesRO> => {
  const BASE_URL = `${config.API_URL}/${period ?? 1}.json?api-key=${config.API_KEY}`;

  try {
    const response = await axios.get(BASE_URL) as AxiosResponse<IArticlesRO>;

    console.log(response, 'THE response');

    return response.data;
  } catch (error) {
    console.log(error, 'THE ERROR');
    return error as IArticlesRO;
  }
};