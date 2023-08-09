import Title from "../Title/Title.js"
import AddComment from "./AddCommnet/AddComment.js"
import * as S from "./CommentStyle.js"

export default function Comment() {
    return (
        <S.CommentContainer>
            <Title color={'white'} text={'인간들의 반응'}/>
            <AddComment/>
        </S.CommentContainer>
    )
}