import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 152px;
  width: 300px;
  height: 75vh;
  padding: 20px;
  padding-top: 120px;
  border-radius: 8px;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  background: #fff;
  border: 10px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: translateY(-40%);
`;

export const Username = styled.h1`
  font-family: "Roboto";
  font-size: 1.6em;
`;
