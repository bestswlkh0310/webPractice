import express from 'express';
import cors from 'cors'
import mysql2 from 'mysql2'

const app = express();
app.use(cors())
app.use(express.json())

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gnpp0310',
    database: 'earthtoday'
})

function addComment(data) {
    const { author, comment, feel } = data
    const sql = 'INSERT INTO comment (author, comment, feel) values (?, ?, ?)'
    connection.query(sql, [author, comment, feel])
}

app.get('/temp', (req, res) => {
    res.send("91.7");
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    addComment(req.body)
    res.send('success')
})

app.listen(3001, () => console.log('3001번 포트에서 대기중'));
