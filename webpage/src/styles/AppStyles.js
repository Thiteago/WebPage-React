import styled, { css } from "styled-components";

export const ContainerContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;

  > p {
    padding: 10px 5px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ContainerInformation = styled.div`
  display: flex;
  box-shadow: 5px 5px 3px -3px #00b2be;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 15px 0 0 5px;

  @media (max-width: 992px) {
    flex-direction: column;
    flex-flow: column-reverse;

    > div {
      padding-top: 20px;
    }
  }
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

  ${(props) =>
    props.centralizer &&
    css`
      text-align: center;
    `}

  > h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    font-family: Roboto;
    color: #00b2be;
  }
`;
