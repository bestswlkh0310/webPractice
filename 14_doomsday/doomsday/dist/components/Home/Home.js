"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var S = require("./HomeStyle.js");
var Title_js_1 = require("../Title/Title.js");
var Clock_js_1 = require("../Clock/Clock.js");
var CalculatorClock_js_1 = require("../../utils/CalculatorClock.js");
var react_1 = require("react");
var PopUp_js_1 = require("../PopUp/PopUp.js");
var Weather_js_1 = require("../Weather/Weather.js");
var Comment_js_1 = require("../Comment/Comment.js");
function Home() {
    var _a = (0, react_1.useState)(""), deadline = _a[0], setDeadline = _a[1];
    var _b = (0, react_1.useState)([]), popUps = _b[0], setPopUps = _b[1];
    (0, react_1.useEffect)(function () {
        setDeadline((0, CalculatorClock_js_1.calculateDeadTime)());
        var timer = setInterval(function () {
            setDeadline((0, CalculatorClock_js_1.calculateDeadTime)());
            var newPopUp = {
                id: Date.now(),
                left: "".concat(Math.random() * 1500, "px")
            };
            setPopUps(function (prevPopUps) { return __spreadArray(__spreadArray([], prevPopUps, true), [newPopUp], false); });
            setPopUps(function (prevPopUps) { return prevPopUps.filter(function (popUp) { return Date.now() - popUp.id < 2100; }); });
        }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return (<>
            <S.HomeStyle>
                <S.TitleContainer>
                    <Title_js_1.default color={"white"} text={"지구는 지금?"}/>
                </S.TitleContainer>
                <S.ClockContainer>
                    <Clock_js_1.default deadline={deadline}/>
                </S.ClockContainer>
                <S.WeatherContainer>
                    <Weather_js_1.default />
                </S.WeatherContainer>
                <S.CommentContainer>
                    <Comment_js_1.default />
                </S.CommentContainer>
            </S.HomeStyle>
            <S.PopUpContainer>
            {popUps.map(function (popUp) { return (<PopUp_js_1.default key={popUp.id} left={popUp.left}/>); })}
            </S.PopUpContainer>
        </>);
}
exports.default = Home;
