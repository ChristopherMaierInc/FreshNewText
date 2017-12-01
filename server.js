const express = require('express')
const app = express()

const messages = [
  {
    id: 1,
    author: 'Derf',
    content: 'Lets make Fresh-New-Text!',
  },
  {
    id: 2,
    author: 'Ferf',
    content: 'mmmmmm Ok!',
  },
  {
    id: 3,
    author: 'Ferg',
    content: 'I hate Yeezys',
  }
]

app.get('/', (req, res) => res.send(messages))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
