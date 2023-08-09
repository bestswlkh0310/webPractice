import * as S from "./AddCommentStyle"
import { addComment } from '../../../repositories/CommentRepository'
import { useState } from "react"

export default function AddComment() {

    const [commentText, setCommentText] = useState("")
    function updateCommentText(e: React.ChangeEvent<HTMLInputElement>) {
        setCommentText(e.target.value)
    }
    function commit() {
        addComment("나다 이년아", commentText, "SAD")
        setCommentText("")
    }

    return (
        <S.AddCommentContainer>
            <S.InputComment value={commentText} onChange={updateCommentText}/>
            <S.SubmitComment onClick={commit}>보내기</S.SubmitComment>
        </S.AddCommentContainer>
    )
}