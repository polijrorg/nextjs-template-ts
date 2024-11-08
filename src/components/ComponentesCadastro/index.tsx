import React from 'react';
import * as S from './styles';

export const TelasCadastro: React.FC = () => {
    return (
        <S.MainDiv>
            <S.ContagemPassos>
                <S.Passo>1</S.Passo>
                <S.Passo>2</S.Passo>
                <S.Passo>3</S.Passo>
                <S.Passo>4</S.Passo>
                <S.Passo>5</S.Passo>
            </S.ContagemPassos>
            <S.Box>
                <S.BemVindoCadastro>Seja bem-vindo ao Lide!</S.BemVindoCadastro>
                <S.CpfArea placeholder="CPF" />
                <S.SenhaArea placeholder="Senha" />
                <S.ConfirmaSenhaArea placeholder="Senha" />
            </S.Box>
            <S.SetaProximoDiv>
                <S.SetaProximo>
                    <img src="public\Downloads\Seta.png" alt="SetaProximo" />
                </S.SetaProximo>
            </S.SetaProximoDiv>
        </S.MainDiv>
    );
};

export default TelasCadastro;
