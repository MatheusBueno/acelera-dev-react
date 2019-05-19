import React from "react";
import {
  Container,
  Repository,
  RepositoryImage,
  RepositoryContent,
  RepositoryTitle,
  RepositoryDescription
} from "./styles";

const REPOS = [
  {
    name:
      "JqwdqwdqwdqwdqwdqwdqwdwefwefwefwefwefweçfoknqwelkfnqwekjwençfkjwenfwelkfnS"
  },
  {
    name: "React"
  },
  {
    name: "Angular"
  },
  {
    name: "Vue"
  },
  {
    name: "Java"
  }
];

const RepositoryList = () => {
  return (
    <Container>
      {REPOS.map(repository => {
        return (
          <Repository>
            <RepositoryImage
              src={"https://cdn.auth0.com/blog/js-fatigue/JSLogo.png"}
              alt="Logo"
            />
            <RepositoryContent>
              <RepositoryTitle>{repository.name}</RepositoryTitle>
              <RepositoryDescription>{repository.name}</RepositoryDescription>
            </RepositoryContent>
          </Repository>
        );
      })}
    </Container>
  );
};

export default RepositoryList;
