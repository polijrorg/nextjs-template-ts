import Test from 'components/TestComponent';
import FileInput from 'designSystemComponents/FileInput';
import AvatarPicker from 'designSystemComponents/AvatarPicker';
import { useState } from 'react';

import * as S from './styles';

const HomeTemplate = () => {
    const [file, setFile] = useState<File>();

    return (
        <S.Container>
            <S.Title>
                Esse template foi criado pela equipe de Research 21.1 para
                projetos internos da Polijunior.
            </S.Title>
            <FileInput
                icon="add2"
                borderRadius
                size="medium"
                iconSize="small"
                file={file}
                setFile={setFile}
            />
            <AvatarPicker setFile={setFile} file={file} />
            <Test title="Esse componente é um teste" />
        </S.Container>
    );
};
export default HomeTemplate;
