"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = void 0;
var axios_1 = require("axios");
function addComment(author, comment, feel) {
    console.log(author, comment, feel);
    axios_1.default.post("http://localhost:3001/comment", {
        author: author,
        comment: comment,
        feel: feel
    })
        .then(function (res) {
        console.log(res.data);
    });
}
exports.addComment = addComment;
