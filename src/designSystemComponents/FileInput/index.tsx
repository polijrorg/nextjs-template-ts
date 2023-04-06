import React, { useRef } from 'react';

import * as S from './styles';

export interface StyleProps {
    size?: 'small' | 'medium' | 'large';
    borderRadius?: boolean;
    color?: string;
}

type ComponentProps = StyleProps & {
    setFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
    file?: File | undefined;
    iconSrc?: string;
    icon?: 'add1' | 'add2' | 'img';
    iconSize?: 'small' | 'medium' | 'large';
};

const FileInput: React.FC<ComponentProps> = ({
    borderRadius = true,
    size = 'small',
    iconSize = size,
    icon = 'add1',
    iconSrc,
    color,
    file,
    setFile
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const icons = {
        add1: '/assets/add-icon.svg',
        add2: '/assets/add-icon2.svg',
        img: '/assets/image-icon.svg'
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        if (setFile && e.target.files[0]) setFile(e.target.files[0]);
    };

    return (
        <>
            <S.Button
                size={size}
                borderRadius={borderRadius}
                onClick={() => inputRef.current?.click()}
                color={color}
            >
                {file ? (
                    <S.Image src={URL.createObjectURL(file)} />
                ) : (
                    <S.Icon size={iconSize} src={iconSrc || icons[icon]} />
                )}
            </S.Button>
            <input
                type="file"
                hidden
                ref={inputRef}
                onChange={handleFileChange}
            />
        </>
    );
};

export default FileInput;
