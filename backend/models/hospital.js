const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  license: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  website: { type: String, unique: true },
  capacity: { type: Number, required: true },
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
  vans: { type: Number, required: true },
  parkings: { type: Number, required: true },
  teams: { type: Number, required: true },
  contract: { type: String, required: true },
  vaccineUsedToday: { type: Number, required: true },
  dailyEstimate: { type: Number, required: true },
  tier1: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cluster' }],
  tier2: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tier3: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

let hospital
try {
  hospital = mongoose.model('Hospital')
} catch (err) {
  hospital = mongoose.model('Hospital', hospitalSchema)
}

module.exports = hospital
