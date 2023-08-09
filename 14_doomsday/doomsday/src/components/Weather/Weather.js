import Title from "../Title/Title.js"
import * as S from "./WeatherStyle.js"
import { useState, useEffect } from "react"
import { getTemp } from "../../repositories/WeatherRepository.js"

export default function Weather() {
    const [temp, setTemp] = useState("불러오는 중..")

    useEffect(() => {
        getTemp().then(result => {
            console.log(result)
            setTemp(result + "도 입니다 ㅜㅜ")
        })
    }, [])

    return (
        <S.WeatherContainer>
            <Title color={"white"} text={"오늘의 지구 체온.."}/>
            <div>
                <Title color={"white"} text={temp}/>
            </div>
        </S.WeatherContainer>
    )
}
