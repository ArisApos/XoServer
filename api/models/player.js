const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  maxPlayers: { type: Number, required: true },
  maxTime: { type: Number, required: true },
  avatar: { type: String, default: '/playersAssets/avatars/default.png' },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);