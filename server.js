const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const messages = [
  {
    id: 1,
    author: 'Derf',
    content: 'Lets make Fresh-New-Text!',
    color: ''
  },
  {
    id: 2,
    author: 'Ferf',
    content: 'mmmmmm Ok!',
    color: 'success'
  },
  {
    id: 3,
    author: 'Ferg',
    content: 'I hate Yeezys',
    color: 'primary'
  },
]

// const currentMessages = [...messages]

let currentId = 3;
const genId = () => ++currentId;

const colors = ['', 'dark', 'primary', 'info', 'success', 'warning', 'danger']

const randomColor = () => {
  return colors[Math.floor(Math.random()*colors.length)];
}

app.get('/api/messages', (req, res) => {
  console.log('GET received')
  res.send(messages)
  console.log('Messages Sent or something part, dammit!!!!')
})

app.post('/api/messages', (req, res) => {

  let id = genId();
  let author = req.body.author;
  let content = req.body.content;
  let color = randomColor();

  messages.unshift({ id, author, content, color });
    res.send(messages);
    console.log('Messages Sent or something part, dammit!!!!')
  })

const PORT = process.env.PORT || 3000
app.listen(3000, () => console.log('Example app listening on port:', PORT,'!'))
