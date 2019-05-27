const selectUserRepositories = ({ repos }) => {
  if (repos.filter !== '') {
    return repos.repositories.filter(repo =>
      repo.language.toLowerCase().includes(repos.filter.toLowerCase())
    );
  } else {
    return repos.repositories;
  }
};

export default {
  selectUserRepositories
};
