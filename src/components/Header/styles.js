import styled from 'styled-components';

const styles = {
  full: `
  height: 100vh;
  justify-content: center;
  `
};

const Header = styled.header`
  padding: 32px 24px;
  height: 72px;
  top: 0;
  width: 100vw;
  z-index: 2;
  position: fixed;
  background: var(--grey);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.2s ease-in;
  ${({ full }) => full && styles.full};
`;

export default Header;
