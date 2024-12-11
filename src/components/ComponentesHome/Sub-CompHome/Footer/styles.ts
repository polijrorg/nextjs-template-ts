import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(57, 44, 114, 1);
    height: 40vh;
    border-radius: 5vh 5vh 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// Div1 - Parte Superior

export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    height: 60%;
    width: 100%;
    user-select: none;
    margin-bottom: 1%;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div11 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div11Images = styled.div`
    padding: 0 10% 0 10%;
    gap: 15%;
    display: flex;
    flex-direction: row;
    height: 60%;
    width: 100%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Img1 = styled.img`
    align-self: center;
    justify-content: center;
    width: 25%;
    -webkit-user-drag: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Img2 = styled.img`
    align-self: center;
    justify-content: center;
    width: 17.5%;
    -webkit-user-drag: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Img3 = styled.img`
    align-self: center;
    justify-content: center;
    width: 17.5%;
    -webkit-user-drag: none;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div11Text = styled.h1`
    display: flex;
    height: 40%;
    width: 100%;
    color: rgba(248, 249, 250, 1);
    font-family: sans-serif;
    font-size: large;
    justify-content: center;
    align-items: center;
    padding: 0 10% 0 10%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div12 = styled.div`
    height: 100%;
    width: 25%;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div13 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Text13 = styled.h1`
    display: flex;
    height: 40%;
    width: 100%;
    color: rgba(248, 249, 250, 1);
    font-family: sans-serif;
    font-size: x-large;
    justify-content: left;
    align-items: center;
    padding: 0 10% 0 10%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    text-decoration: underline;
    border: none;
    display: flex;
    height: 20%;
    width: 70%;
    color: rgba(248, 249, 250, 1);
    font-family: sans-serif;
    font-size: x-large;
    justify-content: left;
    align-items: center;
    padding: 0 10% 0 10%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div14 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Text14 = styled.h1`
    display: flex;
    height: 40%;
    width: 100%;
    color: rgba(248, 249, 250, 1);
    font-family: sans-serif;
    font-size: x-large;
    justify-content: left;
    align-items: center;
    padding: 0 10% 0 10%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

// Linha Divisória

export const Linha = styled.div`
    width: 94%;
    align-self: center;
    background-color: white;
    height: 1%;
`;

// Div2 - Parte Inferior

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`;

export const TextDiv2 = styled.h1`
    display: flex;
    height: 40%;
    width: 100%;
    color: rgba(248, 249, 250, 1);
    font-family: sans-serif;
    font-size: large;
    justify-content: left;
    align-items: center;
    padding: 5% 0 0 15%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Div2Buttons = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    gap: 10%;
    padding: 5% 0 0 15%;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const Button2 = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
    height: 100%;
    width: 15%;
    color: rgba(248, 249, 250, 1);
    justify-content: center;
    align-items: center;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const ButtonImg = styled.img`
    align-self: center;
    justify-content: center;
    -webkit-user-drag: none;
    width: 100%;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;
