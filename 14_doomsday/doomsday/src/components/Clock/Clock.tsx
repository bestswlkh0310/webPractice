import * as S from "./ClockStyle"
import Title from "../Title/Title"

export default function Clock({deadline}: {deadline: string}) {
    return (
        <S.ClockStyle>
            <S.TitleContainer>
                <Title text={"지구 멸망까지 남은 시간..."}/>
            </S.TitleContainer>
            <Title text={deadline}/>
        </S.ClockStyle>
    )
}