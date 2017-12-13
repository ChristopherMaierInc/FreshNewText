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

// const messages = [
//   {
//     id: 1,
//     author: 'Derf',
//     content: 'Lets make Fresh-New-Text!',
//     color: ''
//   },
//   {
//     id: 2,
//     author: 'Ferf',
//     content: 'mmmmmm Ok!',
//     color: 'success'
//   },
//   {
//     id: 3,
//     author: 'Ferg',
//     content: 'I hate Yeezys',
//     color: 'primary'
//   },
// ]

// const currentMessages = [...messages]

let currentId = 3;
const genId = () => ++currentId;

const colors = ['', 'dark', 'primary', 'info', 'success', 'warning', 'danger']

const randomColor = () => {
  return colors[Math.floor(Math.random()*colors.length)];
}

app.get('/api/messages', (req, res) => {
  console.log('GET received')
  Message.find().then((messages) => {
    res.send(messages)
  })
  console.log('Messages Sent or something part, dammit!!!!')
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
