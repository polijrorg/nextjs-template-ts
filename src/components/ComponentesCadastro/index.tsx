import React, { useState } from 'react';
import * as S from './styles';

export const TelasCadastro: React.FC = () => {
    const [count, setCount] = useState(0);

    const [styles1, setStyles1] = useState({});
    const [styles2, setStyles2] = useState({});
    const [styles3, setStyles3] = useState({});
    const [styles4, setStyles4] = useState({});
    const [styles5, setStyles5] = useState({});
    const [perguntas1, setPerguntas1] = useState({});
    const [perguntas2, setPerguntas2] = useState({});
    const [perguntas3, setPerguntas3] = useState({});
    const [perguntas4, setPerguntas4] = useState({});
    const [perguntas5, setPerguntas5] = useState({});
    const [perguntas6, setPerguntas6] = useState({});

    const [CPFvalue, setCPFValue] = useState('');
    const [Senhavalue, setSenhaValue] = useState('');
    const [ConfirmaSenhavalue, setConfirmaSenhaValue] = useState('');
    const [Nomevalue, setNomeValue] = useState('');
    const [Generovalue, setGeneroValue] = useState('');
    const [Identificacaovalue, setIdentificacaoValue] = useState('');
    const [IdentificacaoTextvalue, setIdentificacaoTextValue] = useState('');
    const [ContatoTextvalue, setContatoTextValue] = useState('');
    const [CEPTextvalue, setCEPTextValue] = useState('');
    const [EstadoTextvalue, setEstadoTextValue] = useState('');
    const [CidadeTextvalue, setCidadeTextValue] = useState('');
    const [BairroTextvalue, setBairroTextValue] = useState('');
    const [EnderecoTextvalue, setEnderecoTextValue] = useState('');
    const [NumeroTextvalue, setNumeroTextValue] = useState('');
    const [ComplementoTextvalue, setComplementoTextValue] = useState('');
    const [QuaisServicosTextvalue, setQuaisServicosTextValue] = useState('');
    const [DesdeQuandoTextvalue, setDesdeQuandoTextValue] = useState('');
    // const [MostreSeuServicoTextvalue, setMostreSeuServicoTextValue] = useState('');

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
        setStyles5((prevStyles) => ({
            ...prevStyles,
            display: count < 4 ? 'none' : 'flex',
            backgroundColor:
                count === 4 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
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
        setPerguntas5((prevStyles) => ({
            ...prevStyles,
            display: count !== 3 ? 'none' : 'flex'
        }));
        setPerguntas6((prevStyles) => ({
            ...prevStyles,
            display: count !== 4 ? 'none' : 'flex'
        }));
        if (count < 4) {
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
        setStyles5((prevStyles) => ({
            ...prevStyles,
            display: count < 4 ? 'none' : 'flex',
            backgroundColor:
                count === 4 ? 'rgba(57, 44, 114, 1)' : 'rgba(148,148,148,1)'
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
        setPerguntas5((prevStyles) => ({
            ...prevStyles,
            display: count !== 3 ? 'none' : 'flex'
        }));
        setPerguntas6((prevStyles) => ({
            ...prevStyles,
            display: count !== 4 ? 'none' : 'flex'
        }));
        if (count > -1) {
            setCount(count - 1);
        }
    };

    const CPFInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCPFValue(e.target.value);
    };
    const SenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSenhaValue(e.target.value);
    };
    const ConfirmaSenhaInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setConfirmaSenhaValue(e.target.value);
    };
    const NomeInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setNomeValue(e.target.value);
    };
    const MasculinoCheckBoxChange = () => {
        setGeneroValue('masculino');
    };
    const FemininoCheckBoxChange = () => {
        setGeneroValue('feminino');
    };
    const OutroGeneroCheckBoxChange = () => {
        setGeneroValue('outrogenero');
    };
    const IdentificacaoCPFCheckBoxChange = () => {
        setIdentificacaoValue('CPF');
    };
    const IdentificacaoCNPJCheckBoxChange = () => {
        setIdentificacaoValue('CNPJ');
    };
    const IdentificacaotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setIdentificacaoTextValue(e.target.value);
    };
    const ContatotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setContatoTextValue(e.target.value);
    };
    const CEPtextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCEPTextValue(e.target.value);
    };
    const EstadotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEstadoTextValue(e.target.value);
    };
    const CidadetextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setCidadeTextValue(e.target.value);
    };
    const BairrotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setBairroTextValue(e.target.value);
    };
    const EnderecotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEnderecoTextValue(e.target.value);
    };
    const NumerotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setNumeroTextValue(e.target.value);
    };
    const ComplementotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setComplementoTextValue(e.target.value);
    };
    const QuaisServicostextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setQuaisServicosTextValue(e.target.value);
    };
    const DesdeQuandotextInputChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setDesdeQuandoTextValue(e.target.value);
    };

    return (
        <S.MainDiv>
            <S.ContagemPassos>
                <S.Passo1 style={styles1}>1</S.Passo1>
                <S.Passo2 style={styles2}>2</S.Passo2>
                <S.Passo3 style={styles3}>3</S.Passo3>
                <S.Passo4 style={styles4}>4</S.Passo4>
                <S.Passo5 style={styles5}>5</S.Passo5>
            </S.ContagemPassos>
            <S.Box1>
                {/* perguntas 1 */}

                <S.BemVindoCadastro style={perguntas1}>
                    Seja bem-vindo ao Lide!
                </S.BemVindoCadastro>
                <S.CpfArea
                    style={perguntas1}
                    placeholder="CPF"
                    value={CPFvalue}
                    onChange={CPFInputChange}
                    type="number"
                />
                <S.SenhaArea
                    style={perguntas1}
                    placeholder="Senha"
                    value={Senhavalue}
                    onChange={SenhaInputChange}
                />
                <S.ConfirmaSenhaArea
                    style={perguntas1}
                    placeholder="Confirme sua senha"
                    value={ConfirmaSenhavalue}
                    onChange={ConfirmaSenhaInputChange}
                />

                {/* perguntas 2 */}

                <S.NomeTexto style={perguntas2}>
                    Como gostaria de ser chamado?
                </S.NomeTexto>
                <S.NomeArea
                    style={perguntas2}
                    placeholder="Digite seu nome aqui"
                    value={Nomevalue}
                    onChange={NomeInputChange}
                />
                <S.GeneroTexto style={perguntas2}>
                    Qual o seu gênero?
                </S.GeneroTexto>
                <S.BoxGeneroCheckBox style={perguntas2}>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            checked={Generovalue === 'masculino'}
                            onChange={MasculinoCheckBoxChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Masculino
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            checked={Generovalue === 'feminino'}
                            onChange={FemininoCheckBoxChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Feminino
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                    <S.DivCheckBox style={perguntas2}>
                        <S.GeneroCheckBoxArea
                            style={perguntas2}
                            type="checkbox"
                            checked={Generovalue === 'outrogenero'}
                            onChange={OutroGeneroCheckBoxChange}
                        />
                        <S.CheckBoxTexto style={perguntas2}>
                            Outro
                        </S.CheckBoxTexto>
                    </S.DivCheckBox>
                </S.BoxGeneroCheckBox>

                {/* perguntas 3 */}

                <S.IdentificacaoTexto style={perguntas3}>
                    Qual sua principal identificação?
                </S.IdentificacaoTexto>
                <S.MainDivIdentificacaoCheckBox style={perguntas3}>
                    <S.DivIdentificacaoCheckBox style={perguntas3}>
                        <S.IdentificacaoCheckBoxArea
                            style={perguntas3}
                            type="checkbox"
                            checked={Identificacaovalue === 'CPF'}
                            onChange={IdentificacaoCPFCheckBoxChange}
                        />
                        <S.CheckBoxTexto style={perguntas3}>
                            CPF
                        </S.CheckBoxTexto>
                        <S.IdentificacaoCheckBoxArea
                            style={perguntas3}
                            type="checkbox"
                            checked={Identificacaovalue === 'CNPJ'}
                            onChange={IdentificacaoCNPJCheckBoxChange}
                        />
                        <S.CheckBoxTexto style={perguntas3}>
                            CNPJ
                        </S.CheckBoxTexto>
                    </S.DivIdentificacaoCheckBox>
                </S.MainDivIdentificacaoCheckBox>
                <S.IdentificacaoTextArea
                    style={perguntas3}
                    placeholder="Digite aqui"
                    value={IdentificacaoTextvalue}
                    onChange={IdentificacaotextInputChange}
                />

                {/* perguntas 4 */}

                <S.ContatoTexto style={perguntas4}>
                    Qual o seu contato?
                </S.ContatoTexto>
                <S.ContatoTextArea
                    style={perguntas4}
                    placeholder="Digite seu número de celular aqui"
                    value={ContatoTextvalue}
                    onChange={ContatotextInputChange}
                    type="number"
                />

                {/* perguntas 5 */}

                <S.EnderecoTexto style={perguntas5}>
                    Qual seu endereço?
                </S.EnderecoTexto>
                <S.DivCEPEstado style={perguntas5}>
                    <S.CEPTextArea
                        style={perguntas5}
                        placeholder="CEP"
                        value={CEPTextvalue}
                        onChange={CEPtextInputChange}
                        type="number"
                    />
                    <S.EstadoTextArea
                        style={perguntas5}
                        placeholder="Estado"
                        value={EstadoTextvalue}
                        onChange={EstadotextInputChange}
                    />
                </S.DivCEPEstado>
                <S.CidadeTextArea
                    style={perguntas5}
                    placeholder="Cidade"
                    value={CidadeTextvalue}
                    onChange={CidadetextInputChange}
                />
                <S.BairroTextArea
                    style={perguntas5}
                    placeholder="Bairro"
                    value={BairroTextvalue}
                    onChange={BairrotextInputChange}
                />
                <S.EnderecoTextArea
                    style={perguntas5}
                    placeholder="Endereco"
                    value={EnderecoTextvalue}
                    onChange={EnderecotextInputChange}
                />
                <S.DivNumeroComplemento style={perguntas5}>
                    <S.NumeroTextArea
                        style={perguntas5}
                        placeholder="Número"
                        value={NumeroTextvalue}
                        onChange={NumerotextInputChange}
                        type="number"
                    />
                    <S.ComplementoTextArea
                        style={perguntas5}
                        placeholder="Complemento"
                        value={ComplementoTextvalue}
                        onChange={ComplementotextInputChange}
                    />
                </S.DivNumeroComplemento>

                {/* perguntas 6 */}

                <S.EnderecoTexto style={perguntas6}>
                    Fale mais sobre seus serviços
                </S.EnderecoTexto>
                <S.CidadeTextArea
                    style={perguntas6}
                    placeholder="Diga quais serviços você presta"
                    value={QuaisServicosTextvalue}
                    onChange={QuaisServicostextInputChange}
                />
                <S.BairroTextArea
                    style={perguntas6}
                    placeholder="Desde quando atua na área?"
                    value={DesdeQuandoTextvalue}
                    onChange={DesdeQuandotextInputChange}
                />
                <S.EnderecoTextArea
                    style={perguntas6}
                    placeholder="Mostre seus serviços"
                    value={ContatoTextvalue}
                    onChange={ContatotextInputChange}
                />
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
