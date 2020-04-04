const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  password: String,
  maxPlayers: Number,
  maxTime: Number
});

module.exports = mongoose.model('Player', playerSchema);