import { Header } from "./components/header";
import { RequestedExams } from "./components/RequestedExams";
import { Routes } from "./components/routes";
import { Exams } from "./components/exams";
import { Button } from "./components/button";

import {
  ContainerContent,
  ContainerInformation,
  ClinicalInformation,
  ClinicLocalInfo,
} from "./styles/AppStyles";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
      <ContainerContent>
        <RequestedExams></RequestedExams>
        <p style={{ color: "red" }}>
          Chegar com 50 minutos de antecedência, caso contrário seu exame
          precisará ser reagendado
        </p>
        <ContainerInformation>
          <div>
            <ClinicalInformation>
              <ClinicLocalInfo>
                <h2>Unidade Paulista</h2>
                <p>Av Borba Gato, 323</p>
              </ClinicLocalInfo>
              <ClinicLocalInfo>
                <h2>Data mais próxima</h2>
                <p>11/8/2022</p>
              </ClinicLocalInfo>
              <ClinicLocalInfo>
                <h2>Chegada</h2>
                <p>23h10</p>
              </ClinicLocalInfo>
            </ClinicalInformation>
            <Exams nome="Dr. YTT"></Exams>
            <Exams nome=""></Exams>
          </div>
          <Button text="Mais Horarios Combinados" text2="Agendar"></Button>
        </ContainerInformation>
        <p>
          <b>Atençao:</b> Todos os exames selecionados deverão ser agendados
          conforme os horários sugeridos. Para agendar separadamente, exclua e
          marque individualmente
        </p>
      </ContainerContent>
    </div>
  );
}

export default App;
