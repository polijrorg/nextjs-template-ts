import styled, { css, keyframes } from 'styled-components';
import createVariants from '../../utils/variantUtil';
import { StyledProps } from './index';
import { theme } from '../../styles/index';

interface AnimatedProps {
    ascend: boolean;
}

type AnimatedAndStyledProps = AnimatedProps & StyledProps;

const labelAscend = keyframes`
    from { 
        font-size: 16px;
        margin-top: 22px;
     }
    to { 
        font-size: 12px;
        margin-top: 0px;
        z-index: 1;
     }
`;

const labelDescend = keyframes`
    from { 
        font-size: 12px;
        margin-top: 0px;
        z-index: 1;
        
     }
    to { 
        font-size: 16px;
        margin-top: 22px;
     }
`;

const handleAscend = css`
    animation: 0.2s ${labelAscend} forwards;
`;

const handleDescend = css`
    animation: 0.2s ${labelDescend} forwards;
`;

const smallLabelAscend = keyframes`
    from { 
        margin-top: 14px;
     }
    to { 
        margin-top: 0px;
        z-index: 1;
     }
`;

const smallLabelDescend = keyframes`
    from { 
        margin-top: 0px;
        z-index: 1;
        
     }
    to { 
        margin-top: 14px;
     }
`;

const filledLabelAscend = keyframes`
    from { 
        font-size: 16px;
        margin-top: 22px;
     }
    to { 
        font-size: 12px;
        margin-top: 12px;
        background-color: transparent;
        z-index: 1;
     }
`;

const filledLabelDescend = keyframes`
    from { 
        font-size: 12px;
        margin-top: 12px;
        background-color: transparent;
        z-index: 1;
     }
    to { 
        font-size: 16px;
        margin-top: 22px;
     }
`;

const filledSmallLabelAscend = keyframes`
    from { 
        margin-top: 18px;
     }
    to { 
        margin-top: 10px;
        background-color: transparent;
     }
`;

const filledSmallLabelDescend = keyframes`
    from { 
        margin-top: 10px;
        background-color: transparent;
     }
    to { 
        margin-top: 18px;
     }
`;

export const Label = styled.span<AnimatedProps>`
    margin-top: 0px;
    font-size: 16px;
    ${({ ascend }) => (ascend ? handleAscend : handleDescend)}
`;

export const LabelContainer = styled.div<AnimatedAndStyledProps>`
    position: absolute;
    width: fit-content;
    margin-left: 8px;
    padding: 0px 4px;
    ${({ height, ascend, variant }) =>
        createVariants(
            {
                variants: {
                    ascend: {
                        true: handleAscend,
                        false: handleDescend
                    },
                    variant: {
                        outlined: css`
                            background-color: white;
                        `,
                        filled: css`
                            background-color: #f0f0f0;
                        `,
                        standard: css`
                            background-color: none;
                            margin-left: 0px;
                        `
                    }
                },
                compoundVariants: [
                    {
                        ascend: false,
                        height: 'small',
                        css: css`
                            animation: 0.2s ${smallLabelDescend} forwards;
                        `
                    },
                    {
                        ascend: true,
                        height: 'small',
                        css: css`
                            animation: 0.2s ${smallLabelAscend} forwards;
                        `
                    },
                    {
                        ascend: false,
                        variant: 'filled',
                        height: 'normal',
                        css: css`
                            animation: 0.2s ${filledLabelDescend} forwards;
                        `
                    },
                    {
                        ascend: true,
                        variant: 'filled',
                        height: 'normal',
                        css: css`
                            animation: 0.2s ${filledLabelAscend} forwards;
                        `
                    },
                    {
                        ascend: false,
                        variant: 'standard',
                        css: css`
                            animation: 0.2s ${filledLabelDescend} forwards;
                        `
                    },
                    {
                        ascend: true,
                        variant: 'standard',
                        css: css`
                            animation: 0.2s ${filledLabelAscend} forwards;
                        `
                    },
                    {
                        ascend: false,
                        variant: 'filled',
                        height: 'small',
                        css: css`
                            animation: 0.2s ${filledSmallLabelDescend} forwards;
                        `
                    },
                    {
                        ascend: true,
                        variant: 'filled',
                        height: 'small',
                        css: css`
                            animation: 0.2s ${filledSmallLabelAscend} forwards;
                        `
                    }
                ]
            },
            { height, ascend, variant }
        )};
`;

export const Container = styled.div`
    margin-top: 6px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input<StyledProps>`
    width: 184px;
    position: static;
    overflow: hidden;
    margin-top: 6px;

    ${({ height, variant }) =>
        createVariants(
            {
                variants: {
                    height: {
                        small: css`
                            padding: 8px 12px;
                        `,
                        normal: css`
                            padding: 16px 12px;
                        `
                    },
                    variant: {
                        outlined: css`
                            border: 1px solid;
                            border-radius: 4px;
                            background-color: transparent;
                        `,
                        filled: css`
                            background-color: #f0f0f0;
                            border: none;
                            border-radius: 4px;
                            border-bottom: 1px solid;
                            &:focus {
                                outline: none;
                            }
                        `,
                        standard: css`
                            background-color: white;
                            border: none;
                            border-bottom: 1px solid;
                            &:focus {
                                outline: none;
                            }
                            padding: 20px 4px 6px;
                        `
                    }
                },
                compoundVariants: [
                    {
                        height: 'normal',
                        variant: 'filled',
                        css: css`
                            padding: 22px 12px 10px;
                        `
                    },
                    {
                        height: 'small',
                        variant: 'filled',
                        css: css`
                            padding: 20px 12px 4px;
                        `
                    }
                ]
            },
            { height, variant }
        )};
`;
