import styled from "styled-components";

export const ContainerContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > p {
    padding: 10px 5px;
  }
`;

export const ContainerInformation = styled.div`
  display: flex;
  box-shadow: 5px 5px 3px -3px #00b2be;
  justify-content: space-between;
  width: 95%;
  height: 100%;
  padding: 15px 0 0 5px;
`;

export const ClinicalInformation = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const ClinicLocalInfo = styled.div`
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
