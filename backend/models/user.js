const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: Number, required: true, unique: true },
  email: { type: String, unique: true },
  mobile: { type: Number, unique: true },
  dateOfBirth: { type: Date, required: true },
  vehicle: { type: Boolean, required: true },
  homebound: { type: Boolean, required: true },
  clustered: { type: Boolean, required: true },
  vaccinated: { type: Boolean, required: true },
  certificate: {
    data: Buffer,
    contentType: String,
  },
  family: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
  },
})

let user
try {
  user = mongoose.model('User')
} catch (err) {
  user = mongoose.model('User', userSchema)
}

module.exports = user
