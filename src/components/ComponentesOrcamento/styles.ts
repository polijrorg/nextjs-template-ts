import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(250, 250, 250, 1);
    display: flex;
    height: 100%;
    width: 100%;
`;

export const ContagemPassos = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8vh;
    height: 100%;
    width: 10vw;
    user-select: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Passo1 = styled.h1`
    display: none;
    border: none;
    align-items: center;
    justify-content: center;
    height: 6%;
    font-size: 4vh;
    color: rgba(250, 250, 250, 1);
    width: 6vh;
    background-color: rgba(57, 44, 114, 1);
    border-radius: 3vh;
    font-family: 'Open sans', sans-serif;
`;

export const Passo2 = styled.h1`
    display: none;
    border: none;
    align-items: center;
    justify-content: center;
    height: 6%;
    font-size: 4vh;
    color: rgba(250, 250, 250, 1);
    width: 6vh;
    background-color: rgba(57, 44, 114, 1);
    border-radius: 3vh;
    font-family: 'Open sans', sans-serif;
`;

export const Passo3 = styled.h1`
    display: none;
    border: none;
    align-items: center;
    justify-content: center;
    height: 6%;
    font-size: 4vh;
    color: rgba(250, 250, 250, 1);
    width: 6vh;
    background-color: rgba(57, 44, 114, 1);
    border-radius: 3vh;
    font-family: 'Open sans', sans-serif;
`;

export const Passo4 = styled.h1`
    display: none;
    border: none;
    align-items: center;
    justify-content: center;
    height: 6%;
    font-size: 4vh;
    color: rgba(250, 250, 250, 1);
    width: 6vh;
    background-color: rgba(57, 44, 114, 1);
    border-radius: 3vh;
    font-family: 'Open sans', sans-serif;
`;

export const Passo5 = styled.h1`
    display: none;
    border: none;
    align-items: center;
    justify-content: center;
    height: 6%;
    font-size: 4vh;
    color: rgba(250, 250, 250, 1);
    width: 6vh;
    background-color: rgba(57, 44, 114, 1);
    border-radius: 3vh;
    font-family: 'Open sans', sans-serif;
`;

// Cadastro Box começa aqui

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 80vw;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
        width: 90vw;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

// perguntas 1

export const Titulo1Orcamento = styled.h1`
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const CidadeArea = styled.input`
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

// perguntas 2

export const AreaDireitoTexto = styled.h1`
    display: none;
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const AreaDireitoArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

// perguntas 3

export const DetalhamentoTexto = styled.h1`
    display: none;
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const DetalhamentoArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

// perguntas 4

export const FinalizacaoTexto = styled.h1`
    display: none;
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const ContatoTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

// perguntas 5

export const EnderecoTexto = styled.h1`
    display: none;
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const DivCEPEstado = styled.div`
    display: none;
    flex-direction: row;
    height: 8vh;
    gap: 1vw;
    position: relative;
    width: 50vw;
    align-items: center;
    justify-content: stretch;
`;

export const CEPTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const EstadoTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const CidadeTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const BairroTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const EnderecoTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const DivNumeroComplemento = styled.div`
    display: none;
    flex-direction: row;
    height: 8vh;
    gap: 1vw;
    position: relative;
    width: 50vw;
    align-items: center;
    justify-content: stretch;
`;

export const NumeroTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    width: 30%;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const ComplementoTextArea = styled.input`
    display: none;
    height: 8vh;
    border: none;
    border-bottom: 1px solid rgba(57, 44, 114, 1);
    padding-left: 1vw;
    outline: none;
    font-size: 3vh;
    width: 70%;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const SetaProximoDiv = styled.div`
    width: 12vw;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    @media (max-height: 300px) {
        display: none;
    }
`;

export const SetaProximo = styled.button`
    width: 8vw;
    height: 8vh;
    border-radius: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(57, 44, 114, 1);
    outline: none;
    cursor: pointer;
    margin-right: 3vw;
`;

export const Img3 = styled.img`
    position: relative;
    height: 5vh;
    -webkit-user-drag: none;
`;

export const SetaVolta = styled.button`
    width: 6vw;
    margin-top: 1vh;
    height: 6vh;
    border-radius: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(57, 44, 114, 1);
    outline: none;
    cursor: pointer;
    margin-right: 2vw;
`;

export const Img4 = styled.img`
    position: relative;
    height: 3vh;
    -webkit-user-drag: none;
`;
