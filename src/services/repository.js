import Api from "../utils/api";

class RepositoryService {
  static searchUsers = ({ username }) => Api.get(`/search/users?q=${username}`);

  static getUserRepositories = ({ username }) =>
    Api.get(`/users/${username}/repos?type=all`);
}

export default RepositoryService;
