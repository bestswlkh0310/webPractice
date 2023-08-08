import styled from "styled-components";

export default function SearchDetailItem({item}) {
    return (
        <>
        <Item>
            {item}
        </Item>
        </>
    )
}

const Item = styled.li`
    &:hover {
        background-color: #eee;
        cursor: pointer;
    }
    transition: 0.2s;
    background-color: white;
    padding: 10px;
`
