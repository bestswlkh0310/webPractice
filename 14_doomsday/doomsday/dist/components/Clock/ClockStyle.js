"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleContainer = exports.ClockStyle = void 0;
var styled_components_1 = require("styled-components");
exports.ClockStyle = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    height: 200px;\n    background-color: red;\n    border: 2px solid white;\n"], ["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    height: 200px;\n    background-color: red;\n    border: 2px solid white;\n"])));
exports.TitleContainer = styled_components_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-align: left;\n    padding: 20px;\n"], ["\n    text-align: left;\n    padding: 20px;\n"])));
var templateObject_1, templateObject_2;
