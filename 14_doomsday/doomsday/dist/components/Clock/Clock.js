"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var S = require("./ClockStyle.js");
var Title_js_1 = require("../Title/Title.js");
function Clock(_a) {
    var deadline = _a.deadline;
    return (<S.ClockStyle>
            <S.TitleContainer>
                <Title_js_1.default text={"지구 멸망까지 남은 시간..."}/>
            </S.TitleContainer>
            <Title_js_1.default text={deadline}/>
        </S.ClockStyle>);
}
exports.default = Clock;
