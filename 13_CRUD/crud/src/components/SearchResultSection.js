import { styled } from "styled-components"
import SearchResultItem from "./SearchResultItem"

export default function SearchResultSection({searchResult}) {
    console.log(searchResult)
    return (
        <Container>
            {searchResult.map(item => (<SearchResultItem item={item}/>))}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height:30vh;
    background-color:white;
    border-radius: 10px;
`
const Ul = styled.ul`
    list-style: none;
`