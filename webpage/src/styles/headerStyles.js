import styled, { css, createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    p{
        margin: 0;
        padding: 0;
        font-family: Roboto;
    }

    a{
        text-decoration: none;
    }
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: 1px 10px 5px -9px rgba(0, 0, 0, 0.6);
`;

export const MainLogo = styled.div`
  background-color: green;
  width: 200px;
  height: 50px;
`;

export const ListaLinks = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 5px;
  gap: 10px;
  text-decoration: none;
  list-style-type: none;
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
`;
