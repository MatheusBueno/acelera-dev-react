import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-left: 20px;
  column-gap: 20px;
  flex-grow: 1;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
`;

export const Repository = styled.div`
  height: auto;
  margin: 40px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const RepositoryImage = styled.img`
  min-height: 60px;
  max-height: 60px;
  min-width: 60px;
  max-width: 60px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

export const RepositoryContent = styled.div`
  display: flex;
  max-width: 250px;
  width: auto;

  padding-left: 15px;
  flex-direction: column;
  flex: 1;
`;

export const RepositoryTitle = styled.h1`
  margin: 5px;
  color: #282828;
  font-size: 1.5em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Roboto";
`;

export const RepositoryDescription = styled.h2`
  margin: 0px 8px;
  font-size: 1.15em;
  color: #282828;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Roboto";
`;
