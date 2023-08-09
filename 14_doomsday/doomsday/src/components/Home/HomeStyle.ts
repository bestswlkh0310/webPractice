import { styled } from 'styled-components';

export const HomeStyle = styled.div`
    display: inline-block;
    width: 1200px;
    height: 2050px;
    border: 2px solid white;
    margin-top: 100px;
    margin-bottom: 100px;
`

export const TitleContainer = styled.div`
    margin: 20px;
`

export const ClockContainer = styled.div`
    text-align: center;
`

export const PopUpContainer = styled.div`
    bottom: 0%;
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow-y: hidden;
    text-align: center;
    pointer-events: none;
`;

export const WeatherContainer = styled.div`
    margin: 20px;
    display: inline-block;
`

export const CommentContainer = styled.div`
    margin: 20px;
    vertical-align: top;
    display: inline-block;
`