"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var S = require("./AddCommentStyle");
var CommentRepository_1 = require("../../../repositories/CommentRepository");
var react_1 = require("react");
function AddComment() {
    var _a = (0, react_1.useState)(""), commentText = _a[0], setCommentText = _a[1];
    function updateCommentText(e) {
        setCommentText(e.target.value);
    }
    function commit() {
        (0, CommentRepository_1.addComment)("나다 이년아", commentText, "SAD");
        setCommentText("");
    }
    return (<S.AddCommentContainer>
            <S.InputComment value={commentText} onChange={updateCommentText}/>
            <S.SubmitComment onClick={commit}>보내기</S.SubmitComment>
        </S.AddCommentContainer>);
}
exports.default = AddComment;
