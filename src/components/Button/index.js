import styled, { css } from "styled-components";

const Button = styled.button`
  background: var(--blue);
  border: var(--blue);
  height: 36px;
  color: var(--white);
  font-size: 22px;
  padding: 4px 12px;
  min-width: 112px;
  box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  ${({ icon }) =>
    icon &&
    css`
      border-radius: 100%;
      min-height: 42px;
      max-height: 42px;
      min-width: 42px;
      max-width: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    `};
  :hover {
    /* box-shadow: 0 4px 10px 2px rgba(0,0,0,0.2); */
    background: var(--hover-blue);
    box-shadow: none;
  }
`;

export default Button;
