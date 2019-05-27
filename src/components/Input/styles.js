import styled from "styled-components";
import { Search } from "react-feather";

export const Container = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 768px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  z-index: 1;
  width: 24px;
  height: 24px;
  z-index: 1;
  color: var(--grey);
  left: 5px;
`;

export const Placeholder = styled.span`
  position: absolute;
  font-size: 16px;
  left: 35px;
  color: var(--dark-grey);
  top: 10px;
  z-index: 5;
  transition: all 0.2s ease-in;
`;
