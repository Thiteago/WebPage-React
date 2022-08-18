import { Header } from "./components/header";
import { RequestedExams } from "./components/RequestedExams";
import { Routes } from "./components/routes";
import { Exams } from "./components/exams";
import styled from "styled-components";
import { Button } from "./components/button";

const ContainerContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > p {
    padding: 10px 5px;
  }
`;

const ContainerInformation = styled.div`
  display: flex;
  box-shadow: 5px 5px 3px -3px #00b2be;
  justify-content: space-between;
  width: 95%;
  height: 100%;
  padding: 15px 0 0 5px;
`;

const ClinicalInformation = styled.div`
  display: flex;
  padding: 10px 0;
`;

const ClinicLocalInfo = styled.div`
  padding-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  > h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    font-family: Roboto;
    color: #00b2be;
  }
`;

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
