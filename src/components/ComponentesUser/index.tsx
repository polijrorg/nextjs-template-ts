import React, { useState } from 'react';
/* import { useRouter } from 'next/router'; */
/* import UserService from 'services/UserService'; */
import * as S from './styles';

export const UserBox: React.FC = () => {
    /* const Router = useRouter(); */
    const [Emailuser, setEmailUser] = useState('');
    const [Senhauser, setSenhaUser] = useState('');
    const [Nomeuser, setNomeUser] = useState('');
    /* const [Generouser, setGeneroUser] = useState(''); */
    const [Contatouser, setContatoUser] = useState('');
    const [Cidadeuser, setCidadeUser] = useState('');

    const EmailInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEmailUser(e.target.value);
    };
    const SenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSenhaUser(e.target.value);
    };
    const NomeInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setNomeUser(e.target.value);
    };
    /* const GeneroInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setGeneroUser(e.target.value);
    }; */
    const ContatoInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setContatoUser(e.target.value);
    };
    const CidadeInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCidadeUser(e.target.value);
    };
    /* const Click = async () => {
        try {
            await UserService.UpdateUser({
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
            <S.UserBox>
                <S.TituloUser>Editar Perfil</S.TituloUser>
                <S.DivFotoSair />
                <S.DivEmailSenha>
                    <S.Div>
                        <S.DivTitulo>Email</S.DivTitulo>
                        <S.InputArea
                            placeholder="Email"
                            value={Emailuser}
                            onChange={EmailInputChange}
                        />
                    </S.Div>
                    <S.Div>
                        <S.DivTitulo>Senha</S.DivTitulo>
                        <S.InputArea
                            placeholder="Senha"
                            value={Senhauser}
                            onChange={SenhaInputChange}
                        />
                    </S.Div>
                </S.DivEmailSenha>
                <S.Div>
                    <S.DivTitulo>Nome</S.DivTitulo>
                    <S.InputArea
                        placeholder="Nome"
                        value={Nomeuser}
                        onChange={NomeInputChange}
                    />
                </S.Div>
                <S.Div>
                    <S.DivTitulo>Gênero</S.DivTitulo>
                    <S.InputArea />
                </S.Div>
                <S.Div>
                    <S.DivTitulo>Contato</S.DivTitulo>
                    <S.InputArea
                        placeholder="(00) 00000-0000"
                        value={Contatouser}
                        onChange={ContatoInputChange}
                    />
                </S.Div>
                <S.Div>
                    <S.DivTitulo>Cidade</S.DivTitulo>
                    <S.InputArea
                        placeholder="Cidade"
                        value={Cidadeuser}
                        onChange={CidadeInputChange}
                    />
                </S.Div>
                <S.Entrar>Entrar</S.Entrar>
            </S.UserBox>
        </S.MainDiv>
    );
};

export default UserBox;
