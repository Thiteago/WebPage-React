import {
  HidedMenuStyle,
  HidedListStyle,
  Itens,
  ButtonMedicoList,
} from "../styles/HidedMenuStyle";

export function HidedMenu() {
  return (
    <>
      <HidedMenuStyle>
        <span>Menu</span>
      </HidedMenuStyle>
      <HidedListStyle>
        <ul>
          <Itens>
            <a href="/#">Area do Paciente</a>
          </Itens>
          <Itens>
            <a href="/#">Novo Agendamento</a>
          </Itens>
          <Itens>
            <a href="/#">Resultado dos exames</a>
          </Itens>
          <Itens>
            <a href="/#">Histórico de atendimentos</a>
          </Itens>
          <Itens>
            <a href="/#">Compartilhamento Médico</a>
          </Itens>
          <Itens>
            <a href="/#">Check-Up</a>
          </Itens>
          <Itens>
            <a href="/#">Check-In</a>
          </Itens>
          <Itens>
            <a href="/#">Convênios</a>
          </Itens>
        </ul>

        <ButtonMedicoList>Área do Médico</ButtonMedicoList>
      </HidedListStyle>
    </>
  );
}
