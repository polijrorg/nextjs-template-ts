import React, { useEffect, useState } from 'react';
import * as S from './styles';

export interface StyledProps {
    height: 'small' | 'normal';
    variant: 'outlined' | 'filled' | 'standard';
}

interface ComponentProps extends StyledProps {
    label?: string;
}

const Input: React.FC<ComponentProps> = ({
    height = 'normal',
    label,
    variant = 'outlined'
}) => {
    const [ascend, setAscend] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    function handleAscend() {
        setAscend(true);
    }

    function handleDescend() {
        if (text.length === 0) setAscend(false);
    }

    return (
        <S.Container>
            <S.LabelContainer ascend={ascend} height={height} variant={variant}>
                <S.Label ascend={ascend}>{label}</S.Label>
            </S.LabelContainer>
            <S.Input
                variant={variant}
                height={height}
                onFocus={handleAscend}
                onBlur={handleDescend}
                onChange={(newText) => setText(newText.target.value)}
            />
        </S.Container>
    );
};

export default Input;
