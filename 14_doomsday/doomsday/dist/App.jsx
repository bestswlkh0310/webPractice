"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./AppStyle.js");
var Home_js_1 = require("./components/Home/Home.js");
var S = require("./AppStyle.js");
function App() {
    return (<div className="App">
            <S.AppContainer>
                <Home_js_1.default />
            </S.AppContainer>
        </div>);
}
exports.default = App;
