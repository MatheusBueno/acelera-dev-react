import mockAxios from "axios";

import { repositoryActions, repositoryTypes, repositorySelectors } from "./";
import reducer from "./";
import reposMock from "./repos.mock.json";
import { fetchRepositories } from "./sagas";

jest.mock("axios");

describe("Repositories actions", () => {
  it("Should create an action to fetch repositories", () => {
    const expectedAction = {
      type: repositoryTypes.FETCH_REPOSITORIES_REQUEST,
      payload: { query: "anderson" }
    };
    expect(
      repositoryActions.fetchUserRepositories({ query: "anderson" })
    ).toEqual(expectedAction);
  });

  it("Should create an action to fetch repositories with success", () => {
    const expectedAction = {
      type: repositoryTypes.FETCH_REPOSITORIES_SUCCESS,
      payload: []
    };
    expect(repositoryActions.fetchUserRepositoriesSuccess([])).toEqual(
      expectedAction
    );
  });

  it("Should create an action to fetch repositories with failure", () => {
    const expectedAction = {
      type: repositoryTypes.FETCH_REPOSITORIES_FAILURE,
      payload: { message: "Error" }
    };
    expect(
      repositoryActions.fetchUserRepositoriesFailure({ message: "Error" })
    ).toEqual(expectedAction);
  });

  it("Should create an action to filter repositories by language", () => {
    const expectedAction = {
      type: repositoryTypes.FILTER_REPOSITORIES,
      payload: { language: "JavaScript" }
    };
    expect(
      repositoryActions.filterUserRepositories({ language: "JavaScript" })
    ).toEqual(expectedAction);
  });
});

describe("Repositories reducer", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it("Should return store equals initial state", () => {
    const expectedState = {
      repositories: [],
      filter: ""
    };
    expect(state).toEqual(expectedState);
  });

  it("Should handle FETCH_REPOSITORIES_REQUEST ", () => {
    const action = { type: repositoryTypes.FETCH_REPOSITORIES_REQUEST };
    const expectedState = { ...state, isLoading: true };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("Should handle FETCH_REPOSITORIES_SUCCESS", () => {
    const action = {
      type: repositoryTypes.FETCH_REPOSITORIES_SUCCESS,
      payload: reposMock.items
    };

    const expectedState = {
      repositories: reposMock.items
    };
    expect(reducer({}, action)).toEqual(expectedState);
  });

  it("Should handle FETCH_REPOSITORIES_FAILURE", () => {
    const action = {
      type: repositoryTypes.FETCH_REPOSITORIES_FAILURE,
      payload: { message: "Error on fetch repositories." }
    };

    const expectedState = {
      ...state,
      users: [],
      error: "Error on fetch repositories."
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("Should handle FETCH_REPOSITORIES_FAILURE", () => {
    const action = {
      type: repositoryTypes.FILTER_REPOSITORIES,
      payload: "JavaScript"
    };

    const expectedState = { filter: "JavaScript" };
    expect(reducer({}, action)).toEqual(expectedState);
  });
});

describe("Repositories selectors", () => {
  let state;

  beforeEach(() => {
    state = reducer(
      undefined,
      repositoryActions.fetchUserRepositoriesSuccess(reposMock.items)
    );
  });

  it("Should filter repositories", () => {
    const expectedRepo = [reposMock.items[2]];
    state = {
      ...state,
      repos: { repositories: reposMock.items, filter: "JavaScript" }
    };

    expect(repositorySelectors.selectUserRepositories(state)).toEqual(
      expectedRepo
    );
  });
});

describe("Repositories Sagas", () => {
  it("Should call fetchRepositories function", () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve([]));

    const action = { payload: { query: "Codenation" } };
    const gen = fetchRepositories(action);

    expect(gen.next().value).toBeTruthy();
    expect(gen.next().value).toBeTruthy();
    expect(gen.next().done).toBeTruthy();
  });
});
