import { styled } from "styled-components"

export default function SearchResultItem({item}) {
    return (
        <li key={item.id}>
            <Image src={item.url}/>
        </li>
    )
}

const Image = styled.img`
    width: 200px;
    height: 200px;
`