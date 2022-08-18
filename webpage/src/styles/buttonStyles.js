import styled, { css } from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  color: #00b2be;
  cursor: pointer;
  width: 250px;
  height: 35px;
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid #00b2be;

  ${(props) =>
    props.second &&
    css`
      color: white;
      background-color: #00b2be;
    `}
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 50%;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
