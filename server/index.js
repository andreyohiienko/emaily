const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

require('./routes/authRoutes')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
