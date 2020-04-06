const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true, unique: true, match: /^([a-zA-Z0-9_-]){3,8}$/ },
  password: { type: String, required: true },
  maxPlayers: { type: Number, required: true, match: /^[2-9]$/ },
  maxTime: { type: Number, required: true, match: /^[2-9]$/ },
  avatar: { type: String, default: '/playersAssets/avatars/default.png' },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);