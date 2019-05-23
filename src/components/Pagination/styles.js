import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from 'react-feather';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.span`
  width: 18px;
  height: 18px;
  margin: 0 8px;
  padding: 10px;
  text-align: center;
  vertical-align: center;
  border: 1px solid #282828;
  border-radius: 50%;
  color: ${props => props.active ? '#ffffff' : '#282828'};
  background: ${props => props.active ? '#282828' : '#ffffff'};
  cursor: pointer;
  :hover {
    color: #fff;
    background: #282828;
  }
`;

export const Prev = styled(ChevronLeft)`
  cursor: pointer;
`;
export const Next = styled(ChevronRight)`
  cursor: pointer;
`;