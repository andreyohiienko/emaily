const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ light: 'weight bady' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT)
