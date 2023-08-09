import { styled } from 'styled-components';

export const Title = styled.div`
    font-size: 35px;
    color: black;
    font-weight: 900;
    color: ${props => props.color || 'black'};
    display: inline-block;
`