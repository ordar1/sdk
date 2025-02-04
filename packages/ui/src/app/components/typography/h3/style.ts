import { styled } from 'solid-styled-components';

export const H3Styled = styled.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 15px;
    line-height: 20px;

    color: ${props => props.theme!.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`;
