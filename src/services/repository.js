import Api from "../utils/api";

class RepositoryService {
  static searchUsers = ({ username }) => Api.get(`/search/users?q=${username}`);

  static searchRepositories = ({ repo }) =>
    Api.get(`/search/repositories?q=${repo}`);

  static getUserRepositories = ({ username }) =>
    Api.get(`/users/${username}/repos?type=all`);

  static searchRepositoriesByLanguage = ({ language }) =>
    Api.get(`/search/code?q=addClass+in:file+language${language}`);
}

export default RepositoryService;
