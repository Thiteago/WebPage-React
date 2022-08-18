import home from "../assets/icons/home.svg";
import { HidedMenu } from "./HidedMenu";
import avatar from "../assets/icons/user-avatar.png";

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

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection>
        <MainLogo></MainLogo>

        <HidedMenu></HidedMenu>
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
