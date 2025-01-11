import React, { useState } from 'react';
import * as S from './styles';

export const TelasCadastro: React.FC = () => {
    const [count, setCount] = useState(0);

    const [styles1, setStyles1] = useState({});
    const [styles2, setStyles2] = useState({});
    const [styles3, setStyles3] = useState({});
    const [styles4, setStyles4] = useState({});
    const [perguntas1, setPerguntas1] = useState({});
    const [perguntas2, setPerguntas2] = useState({});
    const [perguntas3, setPerguntas3] = useState({});
    const [perguntas4, setPerguntas4] = useState({});

    const [Cidadevalue, setCidadeValue] = useState('');
    const [AreaDireitovalue, setAreaDireitoValue] = useState('');
    const [Detalhamentovalue, setDetalhamentoValue] = useState('');

    const Click = () => {
        setStyles1((prevStyles) => ({
            ...prevStyles,
            display: count < 0 ? 'none' : 'flex',
            backgroundColor:
                count === 0 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles2((prevStyles) => ({
            ...prevStyles,
            display: count < 1 ? 'none' : 'flex',
            backgroundColor:
                count === 1 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles3((prevStyles) => ({
            ...prevStyles,
            display: count < 2 ? 'none' : 'flex',
            backgroundColor:
                count === 2 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles4((prevStyles) => ({
            ...prevStyles,
            display: count < 3 ? 'none' : 'flex',
            backgroundColor:
                count === 3 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setPerguntas1((prevStyles) => ({
            ...prevStyles,
            display: count !== -1 ? 'none' : 'flex'
        }));
        setPerguntas2((prevStyles) => ({
            ...prevStyles,
            display: count !== 0 ? 'none' : 'flex'
        }));
        setPerguntas3((prevStyles) => ({
            ...prevStyles,
            display: count !== 1 ? 'none' : 'flex'
        }));
        setPerguntas4((prevStyles) => ({
            ...prevStyles,
            display: count !== 2 ? 'none' : 'flex'
        }));
        if (count < 3) {
            setCount(count + 1);
        }
    };

    const ClickVolta = () => {
        setStyles1((prevStyles) => ({
            ...prevStyles,
            display: count < 0 ? 'none' : 'flex',
            backgroundColor:
                count === 0 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles2((prevStyles) => ({
            ...prevStyles,
            display: count < 1 ? 'none' : 'flex',
            backgroundColor:
                count === 1 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles3((prevStyles) => ({
            ...prevStyles,
            display: count < 2 ? 'none' : 'flex',
            backgroundColor:
                count === 2 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setStyles4((prevStyles) => ({
            ...prevStyles,
            display: count < 3 ? 'none' : 'flex',
            backgroundColor:
                count === 3 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
        }));
        setPerguntas1((prevStyles) => ({
            ...prevStyles,
            display: count !== -1 ? 'none' : 'flex'
        }));
        setPerguntas2((prevStyles) => ({
            ...prevStyles,
            display: count !== 0 ? 'none' : 'flex'
        }));
        setPerguntas3((prevStyles) => ({
            ...prevStyles,
            display: count !== 1 ? 'none' : 'flex'
        }));
        setPerguntas4((prevStyles) => ({
            ...prevStyles,
            display: count !== 2 ? 'none' : 'flex'
        }));
        if (count > -1) {
            setCount(count - 1);
        }
    };

    const CidadeInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCidadeValue(e.target.value);
    };
    const AreaDireitoInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setAreaDireitoValue(e.target.value);
    };
    const DetalhamentoInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setDetalhamentoValue(e.target.value);
    };

    return (
        <S.MainDiv>
            <S.ContagemPassos>
                <S.Passo1 style={styles1}>1</S.Passo1>
                <S.Passo2 style={styles2}>2</S.Passo2>
                <S.Passo3 style={styles3}>3</S.Passo3>
                <S.Passo4 style={styles4}>4</S.Passo4>
            </S.ContagemPassos>
            <S.Box1>
                {/* perguntas 1 */}

                <S.Titulo1Orcamento style={perguntas1}>
                    Onde será realizado o serviço?
                </S.Titulo1Orcamento>
                <S.CidadeArea
                    style={perguntas1}
                    placeholder="Cidade"
                    value={Cidadevalue}
                    onChange={CidadeInputChange}
                />
                {/* perguntas 2 */}

                <S.AreaDireitoTexto style={perguntas2}>
                    De qual área do direito precisa?
                </S.AreaDireitoTexto>
                <S.AreaDireitoArea
                    style={perguntas2}
                    placeholder="Digite aqui"
                    value={AreaDireitovalue}
                    onChange={AreaDireitoInputChange}
                />

                {/* perguntas 3 */}

                <S.DetalhamentoTexto style={perguntas3}>
                    Do que precisa?
                </S.DetalhamentoTexto>
                <S.DetalhamentoArea
                    style={perguntas3}
                    placeholder="Diga com detalhes o serviço que precisa"
                    value={Detalhamentovalue}
                    onChange={DetalhamentoInputChange}
                />

                {/* perguntas 4 */}

                <S.FinalizacaoTexto style={perguntas4}>
                    Seu pedido foi enviado
                </S.FinalizacaoTexto>
            </S.Box1>
            <S.SetaProximoDiv>
                <S.SetaVolta onClick={ClickVolta}>
                    <S.Img4 src="/Downloads/Setacopia.png" alt="SetaCopia" />
                </S.SetaVolta>
                <S.SetaProximo onClick={Click}>
                    <S.Img3 src="/Downloads/Seta.png" alt="SetaProximo" />
                </S.SetaProximo>
            </S.SetaProximoDiv>
        </S.MainDiv>
    );
};

export default TelasCadastro;
