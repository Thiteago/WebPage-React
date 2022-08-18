import styled from "styled-components"

const ContainerExams = styled.section`
    width: 100%;
    height: 100%;
    background-color: #e4f6f8;
    margin-top: 20px;
    border-radius: 10px;
    padding-bottom: 30px;
    box-shadow: 0px 10px 0px -7px #00B2BE;


    >p{
        padding: 20px 0 5px 25px;
    }

`

const ListExams = styled.div`
    display: flex;
    gap: 15px;
    padding: 5px 0 0 20px;

    >div{
        padding: 15px;
        background-color: #00b2be;
        color: white;
        font-family: Roboto;
        border-radius: 7px;

        >span{
            cursor: pointer;
            padding-left: 10px;
        }
    }

`



export function RequestedExams(){
    return(
        <>
            <ContainerExams>
                <p>Exame(s) Solicitado(s).</p>
                <ListExams>
                    <div>Rm Coluna Cervical <span>X</span></div>
                    <div>Rm Pelve <span>X</span></div>
                </ListExams>
            </ContainerExams>
        </>
    )
}