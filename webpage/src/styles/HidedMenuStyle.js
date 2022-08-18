import styled from "styled-components";

export const ButtonMedicoList = styled.div`
  font-family: Roboto;
  background-color: blue;
  padding: 15px 5px;
  color: white;
`;

export const HidedListStyle = styled.div`
  display: none;
  position: absolute;
  bottom: -322px;
  background-color: white;

  &:hover {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
  }

  > ul {
    margin: 0;
    padding: 0 15px 10px 5px;
    > li {
      color: black;
      padding-bottom: 15px;
      font-family: Roboto;
      text-decoration: none;
      list-style-type: none;
    }
  }
`;

export const Itens = styled.li`
  &:hover {
    background-color: #00b2be;
    color: white;
  }
`;

export const HidedMenuStyle = styled.div`
  display: none;
  font-family: Roboto;
  padding: 21px;

  &:hover {
    color: white;
    background-color: #00b2be;
  }

  @media (max-width: 1200px) {
    display: flex;

    &:hover + ${HidedListStyle} {
      display: flex;
      cursor: pointer;
      align-items: center;
      flex-direction: column;
    }
  }
`;
