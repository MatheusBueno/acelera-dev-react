import styled from "styled-components";
import { Search } from "react-feather";

export const Container = styled.div`
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
