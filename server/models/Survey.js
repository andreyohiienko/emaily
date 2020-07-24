const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
  yes: { type: Number, dafault: 0 },
  no: { type: Number, dafault: 0 },
})

mongoose.model('surveys', surveySchema)
