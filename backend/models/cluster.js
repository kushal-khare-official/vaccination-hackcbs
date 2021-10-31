const mongoose = require('mongoose')

const clusterSchema = new mongoose.Schema({
  cluster_id: mongoose.Schema.Types.ObjectId,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
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

let cluster
try {
  cluster = mongoose.model('Cluster')
} catch (err) {
  cluster = mongoose.model('Cluster', clusterSchema)
}

module.exports = cluster
