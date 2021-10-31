const mongoose = require('mongoose')

const warehouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  license: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  contract: { type: String, required: true, unique: true },
})

let warehouse
try {
  warehouse = mongoose.model('Warehouse')
} catch (err) {
  warehouse = mongoose.model('Warehouse', warehouseSchema)
}

module.exports = warehouse
