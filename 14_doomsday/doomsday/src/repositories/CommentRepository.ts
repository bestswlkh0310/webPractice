import axios from "axios";

export function addComment(author: string, comment: string, feel: string) {
    console.log(author, comment, feel)
    axios.post("http://localhost:3001/comment", {
            author: author,
            comment: comment,
            feel: feel
        })
        .then((res) => {
            console.log(res.data)
    })
}