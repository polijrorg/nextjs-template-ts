import styled, { css } from 'styled-components';
import { theme } from 'styles';
import createVariants from 'utils/variantUtil';
import { StyleProps } from './index';

export const Button = styled.button<StyleProps>`
    border-width: 2px;
    border-color: ${(props) => props.color || 'rgb(255, 157, 0)'};
    border-style: dashed;
    background-color: transparent;
    ${({ size, borderRadius }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 100px;
                            height: 100px;
                        `,
                        medium: css`
                            width: 200px;
                            height: 200px;
                        `,
                        large: css`
                            width: 300px;
                            height: 300px;
                        `
                    },
                    borderRadius: {
                        true: css`
                            border-radius: ${theme.radii('sm')};
                        `
                    }
                },
                compoundVariants: []
            },
            { size: size || 'small', borderRadius: borderRadius || true }
        )};
`;

type IconProps = Pick<Required<StyleProps>, 'size'>;

export const Icon = styled.img<IconProps>`
    ${({ size }) =>
        createVariants(
            {
                variants: {
                    size: {
                        small: css`
                            width: 30px;
                            height: 30px;
                        `,
                        medium: css`
                            width: 60px;
                            height: 60px;
                        `,
                        large: css`
                            width: 90px;
                            height: 90px;
                        `
                    }
                },
                compoundVariants: []
            },
            { size }
        )};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
