import styled from "styled-components"

const OtherRoutes = styled.div`
    padding: 10px 0 5px 5px;

    >label{
        cursor: pointer;
        color: grey;
        font-family: Roboto;
        padding: 0 1px 0 3px;
        text-decoration: underline;
    }

`

const ActualRoute = styled.div`
    padding-left: 5px;

    >label{
        
        color: #73babf;
        font-family: Roboto;
        font-size: 1.2em;
    }
`

export function Routes(){
    return(
        <>
            <OtherRoutes>
                <label>Área do Paciente</label>
                <label>/Tipo de Agendamento</label>
                <label>/Convênios</label>
            </OtherRoutes>
            <ActualRoute>
                <label>/Listar Horários</label>
            </ActualRoute>
        </>
    )
}