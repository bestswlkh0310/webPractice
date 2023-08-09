"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var S = require("./TitleStyle.js");
function Title(_a) {
    var text = _a.text, color = _a.color;
    return (<S.Title color={color}>
            {text}
        </S.Title>);
}
exports.default = Title;
