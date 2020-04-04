const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  maxPlayers: { type: Number, required: true },
  maxTime: { type: Number, required: true },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);