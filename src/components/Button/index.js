import styled, { css } from "styled-components";
import Input from "../Input";
import { Container as InputSearchContainer } from "../Input/Search/styles";

const styles = {
  icon: css`
    border-radius: 100%;
    min-height: 42px;
    max-height: 42px;
    min-width: 42px;
    max-width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  `
};

const Button = styled.button`
  background: var(--blue);
  border: var(--blue);
  height: 36px;
  color: var(--white);
  font-size: 16px;
  padding: 4px 12px;
  min-width: 112px;
  box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  ${({ icon }) => icon && styles.icon};
  :hover {
    background: var(--hover-blue);
    box-shadow: none;
  }

  ${Input} ~ &,
  ${InputSearchContainer} ~ & {
    box-shadow: none;
  }
`;

export default Button;
