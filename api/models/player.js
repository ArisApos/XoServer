const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: String,
  password: String,
  maxPlayers: Number,
  maxTime: Number,
  points: Number
});

module.exports = mongoose.model('Player', playerSchema);