import check from "../assets/icons/check.svg";
import { ExamInfo, Info, Benefit } from "../styles/examsStyles";

export function Exams(props) {
  return (
    <>
      <ExamInfo>
        <div>
          <Info>
            <h2>Exame(s)</h2>
            <p>Rm Coluna Cervical +</p>
          </Info>
          <Info>
            <h2>Realização</h2>
            <p>00h00</p>
          </Info>
        </div>
        <div>
          <Benefit>
            <span style={{ color: "red", "font-weight": "bold" }}>X</span>
            <p style={{ color: "red" }}>Não coberto pelo convênio</p>
          </Benefit>
          <Benefit>
            <span>
              <img src={check} alt="" />
            </span>
            <p style={{ color: "#00b2be" }}>Atende Particular</p>
          </Benefit>
          <div></div>
        </div>
        <p>{props.nome}</p>
        <a>PREPARO</a>
      </ExamInfo>
    </>
  );
}
