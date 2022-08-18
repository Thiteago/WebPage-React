import styled from "styled-components";

export const ExamInfo = styled.div`
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

export const Info = styled.div`
  > h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    font-family: Roboto;
    color: #00b2be;
  }
`;

export const Benefit = styled.div`
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
