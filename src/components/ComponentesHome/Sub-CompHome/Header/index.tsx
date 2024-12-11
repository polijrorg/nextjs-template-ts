import React from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

export const MainHeader: React.FC = () => {
    const Router = useRouter();
    return (
        <S.MainDiv>
            <S.MainImageDiv>
                <S.LogoButton
                    onClick={() => {
                        Router.push('');
                    }}
                >
                    <S.Img1 src="\Downloads\LogoImage.png" />
                </S.LogoButton>
            </S.MainImageDiv>
            <S.MainButtons>
                <S.Button>Início</S.Button>
                <S.Button>Advogados</S.Button>
                <S.Button>Orçamentos</S.Button>
                <S.Button>Blog</S.Button>
            </S.MainButtons>
            <S.AdvogadoParceiroButton>
                <S.Button2>Seja um advogado parceiro</S.Button2>
            </S.AdvogadoParceiroButton>
            <S.SideButtons>
                <S.Button3>
                    <S.Img2 src="\Downloads\Search.png" />
                </S.Button3>
                <S.Button3>
                    <S.Img2 src="\Downloads\Bell.png" />
                </S.Button3>
                <S.Button3>
                    <S.Img2 src="\Downloads\UserCircle.png" />
                </S.Button3>
            </S.SideButtons>
        </S.MainDiv>
    );
};

export default MainHeader;
