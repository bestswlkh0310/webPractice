import Title from "../Title/Title"
import AddComment from "./AddCommnet/AddComment"
import * as S from "./CommentStyle"

export default function Comment() {
    return (
        <S.CommentContainer>
            <Title color={'white'} text={'인간들의 반응'}/>
            <AddComment/>
        </S.CommentContainer>
    )
}