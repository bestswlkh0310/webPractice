import * as S from "./HomeStyle.js"
import Title from "../Title/Title.js"
import Clock from "../Clock/Clock.js"

export default function Home() {
    return (
        <S.HomeStyle>
            <S.TitleContainer>
                <Title text={"지구는 지금?"}/>
            </S.TitleContainer>
            <S.ClockContainer>
                <Clock/>
            </S.ClockContainer>
        </S.HomeStyle>
    )
}
