import React, { useState } from 'react';
import * as S from './styles';

export interface StyledProps {
    height?: 'small' | 'normal';
    variant?: 'outlined' | 'filled' | 'standard';
    startAdornment?: boolean;
}

interface ComponentProps extends StyledProps {
    label?: string;
}

const Input: React.FC<ComponentProps> = ({
    height = 'normal',
    label,
    variant = 'outlined',
    startAdornment = false
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
            <S.Icon
                src="/assets/test-icon.svg"
                visible={startAdornment}
                height={height}
            />
            <S.LabelContainer
                ascend={ascend}
                height={height}
                variant={variant}
                startAdornment={startAdornment}
            >
                <S.Label ascend={ascend}>{label}</S.Label>
            </S.LabelContainer>
            <S.Input
                variant={variant}
                height={height}
                startAdornment={startAdornment}
                onFocus={handleAscend}
                onBlur={handleDescend}
                onChange={(newText) => setText(newText.target.value)}
            />
        </S.Container>
    );
};

export default Input;
