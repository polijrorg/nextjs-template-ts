import React from 'react';
// import { useRouter } from 'next/router';
import * as S from './styles';

export const MainFooter: React.FC = () => {
    return (
        <S.MainDiv>
            <S.Div1>
                <S.Div11>
                    <S.Div11Images>
                        <S.Img1 src="\Downloads\IMG_7158 1.png" />
                        <S.Img2 src="\Downloads\Group.png" />
                        <S.Img3 src="\Downloads\Group2.png" />
                    </S.Div11Images>
                    <S.Div11Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas bibendum auctor odio ac finibus. Aliquam
                        venenatis at erat sit amet facilisis. Nunc tempor
                        finibus viverra.
                    </S.Div11Text>
                </S.Div11>
                <S.Div12 />
                <S.Div13>
                    <S.Text13>Empresa</S.Text13>
                    <S.Button>Sobre</S.Button>
                    <S.Button>Carreiras</S.Button>
                    <S.Button>Central de Marcas</S.Button>
                </S.Div13>
                <S.Div14>
                    <S.Text14>Suporte</S.Text14>
                    <S.Button>FAQ</S.Button>
                    <S.Button>Fale Conosco</S.Button>
                </S.Div14>
            </S.Div1>
            <S.Linha />
            <S.Div2>
                <S.Div2Buttons>
                    <S.Button2>
                        <S.ButtonImg src="\Downloads\circum_facebook.png" />
                    </S.Button2>
                    <S.Button2>
                        <S.ButtonImg src="\Downloads\basil_instagram-outline.png" />
                    </S.Button2>
                    <S.Button2>
                        <S.ButtonImg src="\Downloads\ph_whatsapp-logo-light.png" />
                    </S.Button2>
                </S.Div2Buttons>
                <S.TextDiv2>Copyright 2016-2024 © Lide</S.TextDiv2>
            </S.Div2>
        </S.MainDiv>
    );
};

export default MainFooter;
