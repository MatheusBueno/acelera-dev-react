import styled from "styled-components";

const Input = styled.input`
  height: 36px;
  padding: 16px 8px 16px 8px;
  width: 100%;
  position: relative;
  font-size: 16px;
  &[type="search"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    text-indent: 28px;
  }
`;

export default Input;
