"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentContainer = exports.WeatherContainer = exports.PopUpContainer = exports.ClockContainer = exports.TitleContainer = exports.HomeStyle = void 0;
var styled_components_1 = require("styled-components");
exports.HomeStyle = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1200px;\n    height: 2050px;\n    border: 2px solid white;\n    margin-top: 100px;\n    margin-bottom: 100px;\n"], ["\n    display: inline-block;\n    width: 1200px;\n    height: 2050px;\n    border: 2px solid white;\n    margin-top: 100px;\n    margin-bottom: 100px;\n"])));
exports.TitleContainer = styled_components_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 20px;\n"], ["\n    margin: 20px;\n"])));
exports.ClockContainer = styled_components_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-align: center;\n"], ["\n    text-align: center;\n"])));
exports.PopUpContainer = styled_components_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    bottom: 0%;\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    overflow-y: hidden;\n    text-align: center;\n    pointer-events: none;\n"], ["\n    bottom: 0%;\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    overflow-y: hidden;\n    text-align: center;\n    pointer-events: none;\n"])));
exports.WeatherContainer = styled_components_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin: 20px;\n    display: inline-block;\n"], ["\n    margin: 20px;\n    display: inline-block;\n"])));
exports.CommentContainer = styled_components_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin: 20px;\n    vertical-align: top;\n    display: inline-block;\n"], ["\n    margin: 20px;\n    vertical-align: top;\n    display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
