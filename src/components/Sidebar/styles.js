import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
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

export const Years = styled.ul`
  overflow-y: auto;
  width: 100%;
  margin: 5px;
  margin-top: 20px;
  padding: 0px 20%;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e1e1e1;
  }
`;

export const Year = styled.li`
  cursor: pointer;
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span:nth-child(1) {
    background: var(--black);
    color: var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  span:not(first-child) {
    text-align: center;
    font-weight: bold;
  }
`;
