"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitComment = exports.InputComment = exports.AddCommentContainer = void 0;
var styled_components_1 = require("styled-components");
exports.AddCommentContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 500px;\n    min-height: 100px;\n    display: flex;\n    background-color: white;\n"], ["\n    min-width: 500px;\n    min-height: 100px;\n    display: flex;\n    background-color: white;\n"])));
exports.InputComment = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 40px;\n    font-size: 18px;\n    border: 1px solid black;\n    padding: 10px;\n    outline: none;\n    &:focus {\n        outline: 1px solid black;\n    }\n"], ["\n    width: 100%;\n    height: 40px;\n    font-size: 18px;\n    border: 1px solid black;\n    padding: 10px;\n    outline: none;\n    &:focus {\n        outline: 1px solid black;\n    }\n"])));
exports.SubmitComment = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100px;\n    height: 40px;\n    border: 1px solid black;\n    &:hover {\n        cursor: pointer;\n    }\n"], ["\n    width: 100px;\n    height: 40px;\n    border: 1px solid black;\n    &:hover {\n        cursor: pointer;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
