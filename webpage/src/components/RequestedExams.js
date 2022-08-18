import { ContainerExams, ListExams } from "../styles/RequestedExamsStyles";

export function RequestedExams() {
  return (
    <>
      <ContainerExams>
        <p>Exame(s) Solicitado(s).</p>
        <ListExams>
          <div>
            Rm Coluna Cervical <span>X</span>
          </div>
          <div>
            Rm Pelve <span>X</span>
          </div>
        </ListExams>
      </ContainerExams>
    </>
  );
}
