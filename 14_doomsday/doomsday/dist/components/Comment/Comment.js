"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Title_js_1 = require("../Title/Title.js");
var AddComment_js_1 = require("./AddCommnet/AddComment.js");
var S = require("./CommentStyle.js");
function Comment() {
    return (<S.CommentContainer>
            <Title_js_1.default color={'white'} text={'인간들의 반응'}/>
            <AddComment_js_1.default />
        </S.CommentContainer>);
}
exports.default = Comment;
