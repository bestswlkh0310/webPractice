import { styled } from "styled-components"

export default function SearchResultItem({item}) {
    return (
        <Image src={item.url}/>
    )
}

const Image = styled.img`
    display: inline-block;
    border-radius: 10px;
    margin: 5px;
`