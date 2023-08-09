import * as S from "./TitleStyle"

export default function Title({text, color}: {text: string, color?: string}) {
    return (
        <S.Title color={color}>
            {text}
        </S.Title>
    )
}