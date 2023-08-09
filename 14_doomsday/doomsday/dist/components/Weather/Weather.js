"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Title_js_1 = require("../Title/Title.js");
var S = require("./WeatherStyle.js");
var react_1 = require("react");
var WeatherRepository_js_1 = require("../../repositories/WeatherRepository.js");
function Weather() {
    var _a = (0, react_1.useState)("불러오는 중.."), temp = _a[0], setTemp = _a[1];
    (0, react_1.useEffect)(function () {
        (0, WeatherRepository_js_1.getTemp)().then(function (result) {
            console.log(result);
            setTemp(result + "도 입니다 ㅜㅜ");
        });
    }, []);
    return (<S.WeatherContainer>
            <Title_js_1.default color={"white"} text={"오늘의 지구 체온.."}/>
            <div>
                <Title_js_1.default color={"white"} text={temp}/>
            </div>
        </S.WeatherContainer>);
}
exports.default = Weather;
