import React from 'react';
import * as S from './styles';
import MainHeader from '../Header&Footer/Header/index';
import MainFooter from '../Header&Footer/Footer/index';
import MainBody from './Body/index';

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
