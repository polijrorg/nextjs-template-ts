import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(57, 44, 114, 1);
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const MainImageDiv = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 15%;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

export const LogoButton = styled.button`
    height: 70%;
    background-color: transparent;
    display: flex;
    border-radius: 3vh;
    width: 65%;
    align-items: center;
    border: none;
`;

export const Img1 = styled.img`
    position: relative;
    width: 100%;
    -webkit-user-drag: none;
`;

// MainButtons

export const MainButtons = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 45%;
    gap: 10%;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 350px) {
        display: none;
    }
`;

export const Button = styled.button`
    font-family: 'Arial';
    font-size: x-large;
    color: rgba(250, 250, 250, 1);
    background-color: transparent;
    user-select: none;
    border: none;
`;

// Advogado Parceiro Button

export const AdvogadoParceiroButton = styled.div`
    display: flex;
    height: 100%;
    width: 20%;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px) {
        display: none;
    }
    @media (max-height: 350px) {
        display: none;
    }
`;

export const Button2 = styled.button`
    font-family: 'Arial';
    font-size: large;
    background-color: rgba(250, 250, 250, 1);
    color: rgba(57, 44, 114, 1);
    user-select: none;
    border: none;
    border-radius: 5vh;
    padding: 2% 4%;
`;

// Side Buttons

export const SideButtons = styled.div`
    display: flex;
    height: 100%;
    width: 20%;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
`;

export const Button3 = styled.button`
    user-select: none;
    border-radius: 5vh;
    border: none;
    padding: 2%;
    background-color: transparent;
`;

export const Img2 = styled.img`
    background-color: transparent;
    width: 100%;
    -webkit-user-drag: none;
`;
