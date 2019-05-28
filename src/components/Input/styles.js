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
  font-family: "Roboto";
  left: 35px;
  color: var(--dark-grey);
  top: 10px;
  z-index: 5;
  transition: all 0.2s ease-in;
`;

export const Input = styled.input`
  font-family: "Roboto";
  height: 36px;
  padding: 16px 8px;
  position: relative;
  font-size: 16px;
  border: 0;
  width: 100%;
  max-width: 768px;
  outline: none;
  border-bottom: 1px solid black;
  &[type="search"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    text-indent: 28px;
  }
  &:focus {
    border-bottom: 1px solid var(--hover-blue);
    transition: all 0.2s ease-in;
  }
  &:focus ~ ${Placeholder} {
    top: -16px;
    font-size: 14px;
    font-family: medium;
    color: var(--hover-blue);
  }
  &:focus ~ ${SearchIcon} {
    color: var(--hover-blue);
  }
  ${props =>
    props.value &&
    `& ~ ${Placeholder} {
    top: -16px;
    font-size: 14px;
    font-family: medium;
  }`}
  &::placeholder {
    color: var(--grey);
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
