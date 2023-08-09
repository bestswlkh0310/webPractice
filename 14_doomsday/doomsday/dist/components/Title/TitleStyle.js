"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var styled_components_1 = require("styled-components");
exports.Title = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 35px;\n    color: white;\n    font-weight: 900;\n    color: ", ";\n    display: inline-block;\n"], ["\n    font-size: 35px;\n    color: white;\n    font-weight: 900;\n    color: ", ";\n    display: inline-block;\n"])), function (props) { return props.color || 'black'; });
var templateObject_1;
