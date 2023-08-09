import styled from "styled-components"

export const AddCommentContainer = styled.div`
    min-width: 500px;
    min-height: 100px;
    display: flex;
    background-color: white;
`

export const InputComment = styled.input`
    width: 100%;
    height: 40px;
    font-size: 18px;
    border: 1px solid black;
    padding: 10px;
    outline: none;
    &:focus {
        outline: 1px solid black;
    }
`


export const SubmitComment = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
    }
`