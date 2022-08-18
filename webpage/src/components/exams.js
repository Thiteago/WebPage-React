import styled from "styled-components";
import check from "../assets/icons/check.svg";

const ExamInfo = styled.div`
  border-top: 2px solid #00b2be;
  padding: 15px 0;

  > div {
    display: flex;
    gap: 80px;
  }
  > p {
    color: grey;
    padding: 10px 0;
  }
  > a {
    color: #00b2be;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Info = styled.div`
  > h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    font-family: Roboto;
    color: #00b2be;
  }
`;

const Benefit = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;

  > span {
    > img {
      filter: invert(61%) sepia(61%) saturate(5704%) hue-rotate(90deg)
        brightness(132%) contrast(103%);
      width: 15px;
    }
  }
`;

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
