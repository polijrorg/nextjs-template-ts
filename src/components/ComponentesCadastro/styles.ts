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

export const Passo = styled.h1`
    display: flex;
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

// Login Box começa aqui

export const Box = styled.div`
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

export const BemVindoCadastro = styled.h1`
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 8vh;
    font-size: 8vh;
    font-weight: bolder;
    margin-bottom: 5vh;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const CpfArea = styled.input`
    height: 8vh;
    border: 1px solid;
    border-radius: 2vh;
    padding-left: 1vw;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const SenhaArea = styled.input`
    height: 8vh;
    border: 1px solid;
    border-radius: 2vh;
    padding-left: 1vw;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const ConfirmaSenhaArea = styled.input`
    height: 8vh;
    border: 1px solid;
    border-radius: 2vh;
    padding-left: 1vw;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 3vh;
    margin: 1vh;
    width: 50vw;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

export const SetaProximoDiv = styled.div`
    width: 10vw;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    @media (max-height: 300px) {
        display: none;
    }
`;

export const SetaProximo = styled.button`
    width: 10vh;
    height: 10vh;
    border-radius: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;
    outline: none;
    cursor: pointer;
`;
