const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.get('/temp', (req, res) => {
  res.send("91.7");
})

app.listen(3001, () => console.log('3001번 포트에서 대기중'));
