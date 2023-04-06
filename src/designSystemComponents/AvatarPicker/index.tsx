import React, { useRef } from 'react';

import * as S from './styles';

export interface StyleProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    iconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    lable?: string;
    withoutIcon?: boolean;
    defaultAvatarSrc?: string;
    iconSrc?: string;
}

type ComponentProps = StyleProps & {
    setFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
    file?: File | undefined;
};

const AvatarPicker: React.FC<ComponentProps> = ({
    size = 'small',
    color,
    iconPosition = 'bottom-right',
    lable,
    withoutIcon = false,
    defaultAvatarSrc = '/assets/avatar-picker/default-avatar.svg',
    iconSrc = '/assets/avatar-picker/edit-icon.svg',
    file,
    setFile
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        if (setFile && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <>
            <S.Avatar
                size={size}
                fileUrl={file ? URL.createObjectURL(file) : defaultAvatarSrc}
                iconPosition={iconPosition}
            >
                {!lable && (
                    <S.IconWrapper
                        size={size}
                        onClick={() => inputRef.current?.click()}
                    >
                        <S.Icon src={iconSrc} size={size} />
                    </S.IconWrapper>
                )}
            </S.Avatar>
            {!!lable && (
                <S.LableWrapper
                    size={size}
                    onClick={() => inputRef.current?.click()}
                >
                    {!withoutIcon && <S.Icon src={iconSrc} />}
                    <S.Lable size={size} color={color}>
                        {lable}
                    </S.Lable>
                </S.LableWrapper>
            )}
            <input
                type="file"
                hidden
                ref={inputRef}
                onChange={handleFileChange}
            />
        </>
    );
};

export default AvatarPicker;
