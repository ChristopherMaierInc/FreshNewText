const mongoose = require('./init')

const Message = mongoose.model('Message', {
  id: String,
  author: String,
  content: String,
  color: String
})

module.exports = Message;
