import styled from "styled-components";
import RecommentSection from "./RecommentSection";
import SearchResultSection from "./SearchResultSection";
import Title from "./Title";

export default function Main({searchResult}) {
    return (
        <Container>
            <LeftStyle>
                <Title text={"추천"}/>
                <RecommentSection/>
            </LeftStyle>
            <RightStyle>
                <Title text={"검색 결과에용"}/>
                <SearchResultSection searchResult={searchResult}/>
            </RightStyle>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
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
const RightStyle = styled.div`
    flex: 1;
    display: inline-block;
    margin: 30px 30px 0 30px;
`
