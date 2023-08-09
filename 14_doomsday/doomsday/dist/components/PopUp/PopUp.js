"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Title_js_1 = require("../Title/Title.js");
var S = require("./PopUpStyle.js");
var react_1 = require("react");
function PopUp(_a) {
    var left = _a.left;
    var _b = (0, react_1.useState)(-100), position = _b[0], setPosition = _b[1];
    var _c = (0, react_1.useState)(true), goingUp = _c[0], setGoingUp = _c[1];
    (0, react_1.useEffect)(function () {
        var timer = setInterval(function () {
            if (goingUp) {
                setPosition(function (prevPosition) { return prevPosition - 100; });
                if (position <= -300) {
                    setGoingUp(false);
                }
            }
            else {
                setPosition(function (prevPosition) { return prevPosition + 100; });
                if (position >= 500) {
                    setGoingUp(true);
                }
            }
        }, 100);
        return function () { return clearInterval(timer); };
    }, [goingUp, position]);
    return (<>
        <S.PopUpContainer left={left} style={{ bottom: "".concat(position, "px") }}>
            <Title_js_1.default color="white" text={"벌써 1초가 지났어요!!!!"}/>
        </S.PopUpContainer>
        </>);
}
exports.default = PopUp;
