const mongoose = require('mongoose')

const manufacturerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  license: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  website: { type: String, unique: true },
  contract: { type: String, required: true, unique: true },
})

let manufacturer
try {
  manufacturer = mongoose.model('Manufacturer')
} catch (err) {
  manufacturer = mongoose.model('Manufacturer', manufacturerSchema)
}

module.exports = manufacturer
