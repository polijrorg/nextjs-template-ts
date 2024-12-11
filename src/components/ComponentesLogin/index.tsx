import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import UserService from 'services/UserService';
import * as S from './styles';

export const LoginBox: React.FC = () => {
    const Router = useRouter();
    const [CPFlogin, setCPFLogin] = useState('');
    const [Senhalogin, setSenhaLogin] = useState('');

    const CPFInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCPFLogin(e.target.value);
    };
    const SenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSenhaLogin(e.target.value);
    };
    /* const Click = async () => {
        try {
            const Response = await UserService.Login({
                cpf: CPFlogin,
                password: Senhalogin
            });
            Router.push('/');
        } catch (error) {
            console.log('CPF ou senha incorretos');
            console.error(error);
        }
    }; */
    return (
        <S.MainDiv>
            <S.MainImageDiv>
                <S.Img1 src="/Downloads/Elipse.png" />
                <S.Img2 src="/Downloads/LogoImage.png" />
            </S.MainImageDiv>
            <S.LoginBox>
                <S.TituloLogin>Bem-vindo de volta!</S.TituloLogin>
                <S.CpfArea
                    placeholder="CPF"
                    value={CPFlogin}
                    onChange={CPFInputChange}
                />
                <S.SenhaArea
                    placeholder="Senha"
                    value={Senhalogin}
                    onChange={SenhaInputChange}
                />
                <S.EsqueceuSenha>Esqueceu a senha?</S.EsqueceuSenha>
                <S.Entrar>Entrar</S.Entrar>
                <S.TextoCadastro>Não tem conta?</S.TextoCadastro>
                <S.Cadastro
                    onClick={() => {
                        Router.push('/Cadastro');
                    }}
                >
                    CADASTRE-SE
                </S.Cadastro>
            </S.LoginBox>
        </S.MainDiv>
    );
};

export default LoginBox;
