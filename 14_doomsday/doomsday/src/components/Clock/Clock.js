import * as S from "./ClockStyle.js"
import Title from "../Title/Title.js"
import { calculateDeadTime } from "../../utils/CalculatorClock.js"
import { useEffect, useState } from "react";

export default function Clock() {

    const [deadline, setDeadline] = useState("")

    useEffect(() => {
        setDeadline(calculateDeadTime())
        const timer = setInterval(() => {
            setDeadline(calculateDeadTime())
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return (
        <S.ClockStyle>
            <S.TitleContainer>
                <Title text={"지구 멸망까지 남은 시간..."}/>
            </S.TitleContainer>
            <Title text={deadline}/>
        </S.ClockStyle>
    )
}
