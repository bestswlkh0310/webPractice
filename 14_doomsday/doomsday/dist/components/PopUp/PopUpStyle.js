"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopUpContainer = void 0;
var styled_components_1 = require("styled-components");
var styled_components_2 = require("styled-components");
var fadeOut = (0, styled_components_2.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"], ["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"])));
exports.PopUpContainer = styled_components_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: ", ";\n  transform: translateX(-50%);\n  width: 400px;\n  height: 100px;\n  background: black;\n  border: 2px solid white;\n  text-align: center;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: bottom 0.5s;\n  animation: ", " 1s ease-in-out ", " forwards;\n"], ["\n  position: absolute;\n  left: ", ";\n  transform: translateX(-50%);\n  width: 400px;\n  height: 100px;\n  background: black;\n  border: 2px solid white;\n  text-align: center;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: bottom 0.5s;\n  animation: ", " 1s ease-in-out ", " forwards;\n"])), function (props) { return props.left || '500px'; }, fadeOut, function (props) { return props.show ? '0s' : '1.5s'; });
var templateObject_1, templateObject_2;
