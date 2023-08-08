import styled from "styled-components";
import RecommentSection from "./RecommentSection";
import Title from "./Title";

export default function Main() {
    return (
        <Container>
            <LeftStyle>
                <Title text={"추천"}/>
                <RecommentSection/>
            </LeftStyle>
        </Container>
    )
}

const Container = styled.div`
    display: inline-block;
    background-color: #f1f1f1;
    text-align: left;
    width: 95vw;
    min-height: 95vh;
    border-radius: 10px;
    margin: 10px;
`

const LeftStyle = styled.div`
    display: inline-block;
    min-width: 500px;
    width: 40vw;
    margin: 30px 0 0 30px;
`
