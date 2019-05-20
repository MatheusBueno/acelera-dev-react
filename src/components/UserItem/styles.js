import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 0 calc(33.333% - 20px);
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  background: transparent;
  border: 10px solid #282828;
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: #282828;
  font-size: 16px;
  margin: 8px 0;
  padding: 0;
`;