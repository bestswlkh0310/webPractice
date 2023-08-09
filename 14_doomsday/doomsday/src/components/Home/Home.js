import * as S from "./HomeStyle.js"
import Title from "../Title/Title.js"
import Clock from "../Clock/Clock.js"
import { calculateDeadTime } from "../../utils/CalculatorClock.js"
import { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp.js"
import Weather from "../Weather/Weather.js"
import Comment from "../Comment/Comment.js";

export default function Home() {
    const [deadline, setDeadline] = useState("")
    const [popUps, setPopUps] = useState([]); 
    
    useEffect(() => {
        setDeadline(calculateDeadTime())
        const timer = setInterval(() => {
            setDeadline(calculateDeadTime())
            const newPopUp = {
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
