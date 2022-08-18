import styled, { css, createGlobalStyle } from "styled-components";
import home from "../assets/icons/home.svg";
import avatar from "../assets/icons/user-avatar.png";

const GlobalStyle = createGlobalStyle`
    p{
        margin: 0;
        padding: 0;
        font-family: Roboto;
    }

    a{
        text-decoration: none;
    }
`;

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 1px 10px 5px -9px rgba(0, 0, 0, 0.6);
`;

const MainLogo = styled.div`
  background-color: green;
  width: 200px;
  height: 50px;
`;

const ListaLinks = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 5px;
  gap: 10px;
  text-decoration: none;
  list-style-type: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const UserSaudation = styled.div`
  p {
    color: blue;
  }
`;

const UserPicture = styled.div`
  > img {
    width: 70px;
  }
`;

const Links = styled.li`
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

const ButtonMedico = styled.div`
  font-family: Roboto;
  background-color: blue;
  padding: 15px 5px;
  color: white;
`;

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection>
        <MainLogo></MainLogo>
        <nav>
          <ListaLinks>
            <Links third>
              <span>
                <img src={home} alt="logo home"></img>
              </span>
              <a href="/#">Area do Paciente</a>
            </Links>
            <Links>
              <a href="/#">Novo Agendamento</a>
            </Links>
            <Links>
              <a href="/#">Resultado dos Exames</a>
            </Links>
            <Links>
              <a href="/#">Histórico de atendimentos</a>
            </Links>
            <Links>
              <a href="/#">Compartilhamento Médico</a>
            </Links>
            <Links second>
              <a href="/#">Check-Up</a>
            </Links>
            <Links>
              <a href="/#">Check-In</a>
            </Links>
            <Links>
              <a href="/#">Convênios</a>
            </Links>
          </ListaLinks>
        </nav>
        <ButtonMedico>Área do médico</ButtonMedico>

        <UserInfo>
          <UserSaudation>
            <p>Ola,</p>
            <p>Pessoa</p>
          </UserSaudation>
          <UserPicture>
            <img src={avatar} alt="user avatar"></img>
          </UserPicture>
        </UserInfo>
      </HeaderSection>
    </>
  );
}
