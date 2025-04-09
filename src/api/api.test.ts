import axios from "axios";

jest.mock("@/config", () => ({
  config: {
    API_URL: "https://api.example.com",
    API_KEY: "mock-api-key",
  },
}));

import { getArticles } from ".";
import { config } from "@/config";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getArticles", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call the correct API URL with default period", async () => {
    const mockResponse = { data: { results: [], status: "OK" } };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getArticles();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${config.API_URL}/1.json?api-key=${config.API_KEY}`
    );
    expect(result).toEqual(mockResponse.data);
  });

  it("should call API with provided period", async () => {
    const mockResponse = { data: { results: [], status: "OK" } };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    await getArticles(7);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${config.API_URL}/7.json?api-key=${config.API_KEY}`
    );
  });

  it("should throw specific error message from response", async () => {
    const errorMessage = "Invalid API Key";
    mockedAxios.get.mockRejectedValueOnce({
      response: {
        data: {
          fault: {
            faultstring: errorMessage,
          },
        },
      },
    });

    await expect(getArticles()).rejects.toThrow(errorMessage);
  });

  it("should throw generic error when response is missing", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    await expect(getArticles()).rejects.toThrow("An unexpected error occurred");
  });
});
