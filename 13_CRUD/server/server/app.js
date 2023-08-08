import { searchGoogle } from "./Crawling.js";
import express from "express";
import cors from "cors"
const app = express();

app.use(cors())

app.get('/get/:q', async (req, res) => {
    const { q } = req.params;
    const result = await searchGoogle(q)
    console.log(q)
    res.send(result)
})

app.listen(3001, () => {
    console.log("server on 3001")
})