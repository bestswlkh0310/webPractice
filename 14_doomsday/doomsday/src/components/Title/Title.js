import * as S from "./TitleStyle.js"

export default function Title({text, color}) {
    return (
        <S.Title color={color}>
            {text}
        </S.Title>
    )
}