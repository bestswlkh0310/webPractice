import axios from "axios";

export function getTemp() {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "http://localhost:3001/temp"
        }).then(async (res) => {
            console.log(await res.data);
            resolve(res.data);
        })
    });
}
