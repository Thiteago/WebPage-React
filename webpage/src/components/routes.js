import styled from "styled-components";
import { OtherRoutes, ActualRoute } from "../styles/routeStyles";

const ContainerRoutes = styled.section`
  margin: 0 auto;
`;

export function Routes() {
  return (
    <>
      <ContainerRoutes>
        <OtherRoutes>
          <label>Área do Paciente</label>
          <label>/Tipo de Agendamento</label>
          <label>/Convênios</label>
        </OtherRoutes>
        <ActualRoute>
          <label>/Listar Horários</label>
        </ActualRoute>
      </ContainerRoutes>
    </>
  );
}
