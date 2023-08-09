import * as S from "./ClockStyle.js"
import Title from "../Title/Title.js"

export default function Clock({deadline}) {
    return (
        <S.ClockStyle>
            <S.TitleContainer>
                <Title text={"지구 멸망까지 남은 시간..."}/>
            </S.TitleContainer>
            <Title text={deadline}/>
        </S.ClockStyle>
    )
}