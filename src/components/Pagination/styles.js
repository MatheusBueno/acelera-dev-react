import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'react-feather';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.span`
  height: 40px;
  width: 40px;
  margin: 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${props => (props.active ? '#282828' : '#ffffff')};
  background: ${props => (props.active ? '#ffffff' : '#282828')};
  border: ${props => (!props.active ? '1px solid #ffffff' : 'none')};
  cursor: pointer;
  :hover {
    color: #282828;
    border: 1px solid #ffffff;
    background: #ffffff;
  }
`;

export const Prev = styled(ChevronLeft)`
  cursor: pointer;
  color: #ffffff;
`;
export const Next = styled(ChevronRight)`
  cursor: pointer;
  color: #ffffff;
`;
