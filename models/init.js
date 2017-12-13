const mongoose = require('mongoose')

// Use the promise functionality built into Node
mongoose.Promise = global.Promise
console.log(process.env.DB)
mongoose.connect(process.env.DB, { useMongoClient: true })

  .then(() => {
    console.log('Successfully connected to database!')
  })
  .catch(error => {
    // Something went wrong!
    console.log('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
