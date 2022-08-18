import home from "../assets/icons/home.svg";
import avatar from "../assets/icons/user-avatar.png";
import styled from "styled-components";

import {
  GlobalStyle,
  HeaderSection,
  MainLogo,
  ListaLinks,
  Links,
  ButtonMedico,
  UserInfo,
  UserSaudation,
  UserPicture,
} from "../styles/headerStyles";

const HidedMenu = styled.div`
  display: none;
  font-family: Roboto;
  padding: 21px;

  &:hover {
    color: white;
    background-color: #00b2be;
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`;

const HidedList = styled.div`
  display: none;

  @media (max-width: 1200px) {
  }
`;

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection>
        <MainLogo></MainLogo>
        <HidedList>
          <ul>
            <li>
              <a href="/#">Area do Paciente</a>
            </li>
            <li>
              <a href="/#">Novo Agendamento</a>
            </li>
            <li>
              <a href="/#">Resultado dos exames</a>
            </li>
            <li>
              <a href="/#">Histórico de atendimentos</a>
            </li>
            <li>
              <a href="/#">Compartilhamento Médico</a>
            </li>
            <li>
              <a href="/#">Check-Up</a>
            </li>
            <li>
              <a href="/#">Check-In</a>
            </li>
            <li>
              <a href="/#">Convênios</a>
            </li>
          </ul>

          <div>Área do Médico</div>
        </HidedList>
        <HidedMenu>
          <span>Menu</span>
        </HidedMenu>
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
