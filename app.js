require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! I am Muhammad Tariq...')
})

app.get('/profileme', (req, res) => {
 res.send('Muhammad Tariq, Tariq Mehmood, Graduated, Github:-muhcoderr')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})