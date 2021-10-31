const mongoose = require('mongoose')

const vaccineSchema = new mongoose.Schema({
  vaccine_id: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
})

let vaccine
try {
  vaccine = mongoose.model('vaccine')
} catch (err) {
  vaccine = mongoose.model('vaccine', vaccineSchema)
}

module.exports = vaccine
