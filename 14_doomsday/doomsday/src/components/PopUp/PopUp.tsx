import Title from "../Title/Title";
import * as S from "./PopUpStyle"
import { useEffect, useState } from "react";

export default function PopUp({left}: {left: string}) {


const [position, setPosition] = useState(-100);
const [goingUp, setGoingUp] = useState(true);

useEffect(() => {
    const timer = setInterval(() => {
    if (goingUp) {
        setPosition(prevPosition => prevPosition - 100);
        if (position <= -300) {
            setGoingUp(false);
        }
    } else {
        setPosition(prevPosition => prevPosition + 100);
        if (position >= 500) {
            setGoingUp(true);
        }
    }
    }, 100);

    return () => clearInterval(timer);
}, [goingUp, position]);
    return (
        <>
        <S.PopUpContainer show={true} left={left} style={{ bottom: `${position}px` }}>
            <Title color="white" text={"벌써 1초가 지났어요!!!!"}/>
        </S.PopUpContainer>
        </>
    )
}