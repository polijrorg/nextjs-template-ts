import styled, { css } from 'styled-components';
import { theme } from 'styles';
import createVariants from 'utils/variantUtil';
import { StyleProps } from './index';

type IAvatar = StyleProps & {
    fileUrl: string;
};

export const Avatar = styled.div<IAvatar>`
    background-image: ${(props) => `url(${props.fileUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

    display: flex;
    flex-direction: row;

    ${({ size, iconPosition }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 100px;
                            height: 100px;
                            border-radius: 50px;
                        `,
                        medium: css`
                            width: 150px;
                            height: 150px;
                            border-radius: 75px;
                        `,
                        large: css`
                            width: 200px;
                            height: 200px;
                            border-radius: 100px;
                        `
                    },
                    iconPosition: {
                        'top-left': css`
                            justify-content: flex-start;
                            align-items: flex-start;
                        `,
                        'top-right': css`
                            justify-content: flex-end;
                            align-items: flex-start;
                        `,
                        'bottom-left': css`
                            justify-content: flex-start;
                            align-items: flex-end;
                        `,
                        'bottom-right': css`
                            justify-content: flex-end;
                            align-items: flex-end;
                        `
                    }
                },
                compoundVariants: []
            },
            {
                size: size || 'small',
                iconPosition: iconPosition || 'bottom-right'
            }
        )};
`;

export const IconWrapper = styled.div<Pick<StyleProps, 'size' | 'color'>>`
    background-color: ${(props) =>
        props.color || theme.color('primary', 'main')};

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ size }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 30px;
                            height: 30px;
                            border-radius: 15px;
                        `,
                        medium: css`
                            width: 40px;
                            height: 40px;
                            border-radius: 25px;
                        `,
                        large: css`
                            width: 50px;
                            height: 50px;
                            border-radius: 25px;
                        `
                    }
                },
                compoundVariants: []
            },
            { size: size || 'small' }
        )};
`;

export const Icon = styled.img<Pick<StyleProps, 'size'>>`
    ${({ size }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 16px;
                            height: 16px;
                        `,
                        medium: css`
                            width: 20px;
                            height: 20px;
                        `,
                        large: css`
                            width: 24px;
                            height: 24px;
                        `
                    }
                },
                compoundVariants: []
            },
            { size: size || 'small' }
        )};
`;

export const Lable = styled.p<StyleProps>`
    color: ${(props) => props.color || theme.color('primary', 'main')};
    font-family: Poppins;

    ${({ size }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            font-size: 12px;
                        `,
                        medium: css`
                            font-size: 16px;
                        `,
                        large: css`
                            font-size: 24px;
                        `
                    }
                },
                compoundVariants: []
            },
            { size: size || 'small' }
        )};
`;

export const LableWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;
    margin-top: 12px;
    ${({ size }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 100px;
                        `,
                        medium: css`
                            width: 150px;
                        `,
                        large: css`
                            width: 200px;
                        `
                    }
                },
                compoundVariants: []
            },
            { size: size || 'small' }
        )};
`;
