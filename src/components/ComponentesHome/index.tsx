import React from 'react';
import * as S from './styles';
import MainHeader from './Sub-CompHome/Header/index';
import MainFooter from './Sub-CompHome/Footer/index';
import MainBody from './Sub-CompHome/Body/index';

export const MainPage: React.FC = () => {
    return (
        <S.MainDiv>
            <MainHeader />
            <MainBody />
            <MainFooter />
        </S.MainDiv>
    );
};

export default MainPage;
