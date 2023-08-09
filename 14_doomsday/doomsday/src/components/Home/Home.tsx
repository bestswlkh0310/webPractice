import * as S from "./HomeStyle"
import Title from "../Title/Title"
import Clock from "../Clock/Clock"
import { calculateDeadTime } from "../../utils/CalculatorClock"
import { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp"
import Weather from "../Weather/Weather"
import Comment from "../Comment/Comment";

interface PopUpItem {
    id: number
    left: string
}

export default function Home() {
    const [deadline, setDeadline] = useState("")
    const [popUps, setPopUps] = useState<PopUpItem[]>([]);
    
    useEffect(() => {
        setDeadline(calculateDeadTime())
        const timer = setInterval(() => {
            setDeadline(calculateDeadTime())
            const newPopUp: PopUpItem = {
                id: Date.now(),
                left: `${Math.random() * 1500}px`
             };
            setPopUps(prevPopUps => [...prevPopUps, newPopUp]);
            setPopUps(prevPopUps => prevPopUps.filter(popUp => Date.now() - popUp.id < 2100));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <S.HomeStyle>
                <S.TitleContainer>
                    <Title color={"white"} text={"지구는 지금?"}/>
                </S.TitleContainer>
                <S.ClockContainer>
                    <Clock deadline={deadline}/>
                </S.ClockContainer>
                <S.WeatherContainer>
                    <Weather/>
                </S.WeatherContainer>
                <S.CommentContainer>
                    <Comment/>
                </S.CommentContainer>
            </S.HomeStyle>
            <S.PopUpContainer>
            {popUps.map(popUp => (
                    <PopUp key={popUp.id} left={popUp.left} />
                ))}
            </S.PopUpContainer>
        </>
    )
}
