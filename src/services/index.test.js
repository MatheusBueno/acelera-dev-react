import mockAxios from "axios";

import RepositoryService from "./repository";

jest.mock("axios");

describe("Repository Service", () => {
  it("Should get a user list", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve([]));

    const repos = await RepositoryService.searchUsers({
      username: "codenation"
    });

    expect(repos).toEqual([]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("Should search Repositories from a user", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve([]));

    const repos = await RepositoryService.getUserRepositories({
      username: "codenation"
    });

    expect(repos).toEqual([]);
  });
});
