import { styled } from "styled-components";

export default function Title({text}) {
    return (
        <TitleStyle>
            {text}
        </TitleStyle>
    )
}

const TitleStyle = styled.div`
    font-size: 22px;
    padding: 2px;
`