import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Repository,
  RepositoryImage,
  RepositoryContent,
  RepositoryTitle,
  RepositoryDescription
} from "./styles";
import { selectImageLanguage } from "../../utils/utils";

const RepositoryList = ({ repositoriesList }) => {
  const selectAImageLanguage = repository =>
    selectImageLanguage(repository.language);

  return (
    <Container>
      {repositoriesList.map(repository => {
        return (
          <Repository key={repository.id}>
            <RepositoryImage
              src={selectAImageLanguage(repository)}
              alt="Logo"
            />
            <RepositoryContent>
              <RepositoryTitle>{repository.name}</RepositoryTitle>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
            </RepositoryContent>
          </Repository>
        );
      })}
    </Container>
  );
};

RepositoryList.propTypes = {
  repositoriesList: PropTypes.array
}

RepositoryList.defaultProps = {
  repositoriesList: []
}

export default RepositoryList;
