import styled from "styled-components";

const styles = {
  full: `
  height: 100vh;
  justify-content: center;
  `
};

const Header = styled.header`
  padding: 32px 24px;
  height: 72px;
  width: 100vw;
  position: fixed;
  background: var(--grey);
  display: flex;
  align-items: center;
  transition: height 0.2s ease-in;
  ${({ full }) => full && styles.full};
`;

export default Header;
