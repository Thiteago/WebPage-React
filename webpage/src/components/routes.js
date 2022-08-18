import { OtherRoutes, ActualRoute } from "../styles/routeStyles";
export function Routes() {
  return (
    <>
      <OtherRoutes>
        <label>Área do Paciente</label>
        <label>/Tipo de Agendamento</label>
        <label>/Convênios</label>
      </OtherRoutes>
      <ActualRoute>
        <label>/Listar Horários</label>
      </ActualRoute>
    </>
  );
}
