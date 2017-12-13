// Bring in our environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Message = require('./models/Message');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

const colors = ['', 'dark', 'primary', 'info', 'success', 'warning', 'danger']

const randomColor = () => {
  return colors[Math.floor(Math.random()*colors.length)];
}

app.get('/api/messages', (req, res) => {
  console.log('GET received')
  Message.find().then((messages) => {
    res.send(messages)
  })
})

app.post('/api/messages', (req, res) => {
  let author = req.body.author;
  let content = req.body.content;
  let color = randomColor();
  Message.create({author, content, color}).then((message) => {
    res.send(message)
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Example app listening on port:', PORT,'!'))
