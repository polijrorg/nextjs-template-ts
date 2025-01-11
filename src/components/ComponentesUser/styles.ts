import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(250, 250, 250, 1);
    display: flex;
    height: 100%;
    width: 100%;
`;

// User Box começa aqui

export const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100vw;
    align-items: center;
    justify-content: center;
    @media (max-height: 300px) {
        display: none;
    }
`;

export const TituloUser = styled.h1`
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 40px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

// Início das Informações do usuário

// Geral

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    position: relative;
    width: 50vw;
    align-items: left;
    justify-content: center;
    @media (max-height: 300px) {
        display: none;
    }
`;

export const DivTitulo = styled.h1`
    font-family: 'Open sans', sans-serif;
    width: max-content;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(57, 44, 114, 1);
    user-select: none;
`;

export const InputArea = styled.input`
    height: 50px;
    border: 1px solid;
    border-radius: 20px;
    padding-left: 16px;
    border-color: rgba(57, 44, 114, 1);
    outline: none;
    font-size: 24px;
    width: 100%;
    color: rgba(57, 44, 114, 1);
    ::-webkit-input-placeholder {
        color: rgba(57, 44, 114, 1);
    }
`;

// Foto & Botão Sair

export const DivFotoSair = styled.div`
    display: flex;
    flex-direction: row;
    height: 120px;
    position: relative;
    width: 50vw;
    align-items: center;
    justify-content: center;
    gap: 2%;
    @media (max-height: 300px) {
        display: none;
    }
`;

// Email & Senha

export const DivEmailSenha = styled.div`
    display: flex;
    flex-direction: row;
    height: 120px;
    position: relative;
    width: 50vw;
    align-items: center;
    justify-content: center;
    gap: 2%;
    @media (max-height: 300px) {
        display: none;
    }
`;

// Botões finais

export const Entrar = styled.button`
    font-family: 'Open sans', sans-serif;
    width: 30vw;
    height: 8vh;
    font-size: 30px;
    margin: 3vh;
    border-radius: 2vh;
    background-color: rgba(57, 44, 114, 1);
    color: rgba(250, 250, 250, 1);
    border: none;
    cursor: pointer;
    user-select: none;
`;
