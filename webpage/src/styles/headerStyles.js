import styled, { css, createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    p{
        margin: 0;
        padding: 0;
        font-family: Roboto;
    }

    body{
        margin: 0;
    }

    a{
        text-decoration: none;
        color: inherit
    }
`;

export const HeaderSection = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: 1px 10px 5px -9px rgba(0, 0, 0, 0.6);

  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

export const MainLogo = styled.div`
  background-color: green;
  width: 200px;
  height: 50px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ListaLinks = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 5px;
  gap: 10px;
  text-decoration: none;
  list-style-type: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const UserSaudation = styled.div`
  p {
    color: blue;
  }
`;

export const UserPicture = styled.div`
  > img {
    width: 70px;
  }

  @media (max-width: 1200px) {
    > img {
      width: 40px;
    }
  }
`;

export const Links = styled.li`
  width: 90px;
  a {
    cursor: pointer;
    font-family: Roboto;
    color: #0000ff;
    font-weight: bold;
    font-size: 0.9em;
  }

  ${(props) =>
    props.second &&
    css`
      padding-left: 30px;
    `}

  ${(props) =>
    props.third &&
    css`
      display: flex;
      align-items: center;

      > span {
        > img {
          filter: invert(8%) sepia(93%) saturate(7463%) hue-rotate(248deg)
            brightness(100%) contrast(144%);
          width: 20px;
          padding-right: 5px;
        }
      }
    `}
`;

export const ButtonMedico = styled.div`
  font-family: Roboto;
  background-color: blue;
  padding: 15px 5px;
  color: white;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1306px) {
    padding: 15px 0px;
  }
  @media (max-width: 1296px) {
    padding: 5px 0px;
    width: 145px;
    text-align: center;
  }
`;
