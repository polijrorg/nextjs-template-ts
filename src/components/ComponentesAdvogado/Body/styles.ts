import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: rgba(250, 250, 250, 1);
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    position: auto;
    width: 100%;
    margin-top: 10vh;
    height: 45vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(52, 12, 82, 1);
`;

export const Div11 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 70%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(52, 12, 82, 1);
`;

export const TextDiv1 = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    width: 60%;
    height: 12vh;
    font-size: 6vh;
    font-weight: bolder;
    color: rgba(250, 250, 250, 1);
    user-select: none;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ButtonDiv1 = styled.button`
    font-family: 'Open sans', sans-serif;
    margin-top: 5vh;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 10vh;
    font-size: 4vh;
    font-weight: bold;
    border-radius: 2vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: none;
    cursor: pointer;
    user-select: none;
`;

export const Div12 = styled.div`
    display: flex;
    position: auto;
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: left;
    background-color: rgba(52, 12, 82, 1);
    border: none;
`;

export const ImgDiv1 = styled.img`
    height: 100%;
    margin-left: -75%;
    width: 200%;
    border: none;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

// Div2

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;
`;

export const TextDiv2 = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 80%;
    height: 12vh;
    font-size: 6vh;
    font-weight: bolder;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: left;
`;

export const Div21 = styled.div`
    display: flex;
    flex-direction: row;
    position: auto;
    width: 90%;
    height: 100%;
    justify-content: center;
    padding: 2vh;
    gap: 5vh;
    align-items: center;
    margin-bottom: 2vh;
`;

export const ButtonDiv2 = styled.button`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    justify-content: center;
    align-items: center;
    width: 20vh;
    height: 20vh;
    font-size: 4vh;
    font-weight: bold;
    border-radius: 2vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(57, 44, 114, 1);
    cursor: pointer;
    user-select: none;
`;

export const ButtonDiv2Img = styled.img`
    height: 80%;
    width: 90%;
    padding: 10%;
    border: none;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const ButtonDiv2Text = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    width: 80%;
    height: 8vh;
    font-size: 4vh;
    font-weight: bolder;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: center;
`;

// Div3

export const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
`;

export const TextDiv3 = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 80%;
    height: 12vh;
    font-size: 6vh;
    font-weight: bolder;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: left;
`;

export const Div31 = styled.div`
    display: flex;
    flex-direction: row;
    position: auto;
    width: 90%;
    height: 100%;
    justify-content: center;
    padding: 2vh;
    gap: 2vh;
    align-items: center;
    margin-bottom: 2vh;
`;

export const ButtonDiv3 = styled.button`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    justify-content: top;
    align-items: top;
    width: 30vh;
    height: 30vh;
    font-size: 4vh;
    font-weight: bold;
    border-radius: 2vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(57, 44, 114, 1);
    cursor: pointer;
    user-select: none;
`;

export const ButtonDiv3Img = styled.img`
    height: 80%;
    width: 100%;
    border: none;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const FinalButtonDiv3 = styled.button`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    justify-content: center;
    align-items: center;
    width: 20vh;
    height: 20vh;
    font-size: 4vh;
    font-weight: bold;
    border-radius: 2vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(57, 44, 114, 1);
    cursor: pointer;
    user-select: none;
`;

// Div4

export const Div4 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
`;

// Div5

export const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 90vh;
    justify-content: top;
    align-items: left;
`;

export const TextDiv5 = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding-left: 5%;
    width: 40%;
    height: 10vh;
    font-size: 5vh;
    font-weight: bolder;
    color: rgba(250, 250, 250, 1);
    user-select: none;
    justify-content: center;
    text-align: center;
    background-color: rgba(57, 44, 114, 1);
`;

export const Div51 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 70vh;
    justify-content: center;
    padding: 2vh;
    gap: 2vh;
    align-items: center;
    margin-bottom: 2vh;
`;

export const ButtonDiv5 = styled.button`
    display: flex;
    flex-direction: row;
    font-family: 'Open sans', sans-serif;
    justify-content: left;
    padding-left: 4vw;
    align-items: center;
    width: 60vw;
    height: 80vh;
    font-size: 2.5vh;
    font-weight: light;
    outline: none;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    text-decoration: underline;
    border: none;
    cursor: pointer;
    user-select: none;
`;

// Div6

export const Div6 = styled.div`
    display: flex;
    flex-direction: column;
    position: auto;
    width: 100%;
    height: 60vh;
    justify-content: center;
    align-items: center;
`;

export const TextDiv6 = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 80%;
    height: 6vh;
    font-size: 4vh;
    font-weight: bolder;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: center;
`;

export const Div61 = styled.div`
    display: flex;
    flex-direction: row;
    position: auto;
    width: 90%;
    height: 100%;
    justify-content: center;
    padding: 2vh;
    gap: 5vh;
    align-items: center;
    margin-bottom: 2vh;
`;

export const ButtonDiv6 = styled.button`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    justify-content: center;
    align-items: center;
    width: 50vh;
    height: 45vh;
    font-size: 4vh;
    font-weight: bold;
    border-radius: 2vh;
    color: rgba(57, 44, 114, 1);
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(57, 44, 114, 1);
    cursor: pointer;
    user-select: none;
`;

export const ButtonDiv6Img = styled.img`
    height: 60%;
    width: 100%;
    border: none;
    border-radius: 2vh 2vh 0 0;
    user-select: none;
    @media (max-width: 960px) {
        width: 0;
    }
    @media (max-height: 300px) {
        display: none;
    }
`;

export const ButtonDiv6Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    align-items: left;
    justify-content: center;
`;

export const ButtonDiv6DivType = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    font-weight: lighter;
    width: 40%;
    height: 4vh;
    font-size: 2vh;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: center;
`;

export const ButtonDiv6DivTitle = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: 8vh;
    font-weight: bolder;
    font-size: 2vh;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: center;
`;

export const ButtonDiv6DivLegenda = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Open sans', sans-serif;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: 4vh;
    font-weight: lighter;
    font-size: 1.5vh;
    color: rgba(52, 12, 82, 1);
    user-select: none;
    justify-content: center;
    text-align: left;
`;
