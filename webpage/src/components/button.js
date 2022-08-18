import { ContainerButtons, Buttons } from "../styles/buttonStyles";

export function Button(props) {
  return (
    <>
      <ContainerButtons>
        <Buttons>{props.text}</Buttons>
        <Buttons second>{props.text2}</Buttons>
      </ContainerButtons>
    </>
  );
}
