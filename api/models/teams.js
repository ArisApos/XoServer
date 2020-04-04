const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  teamName: { type: String, required: true },
  teamPassword: { type: String, required: true },
  players: [
    {
      player: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
    },
  ],
});

module.exports = mongoose.model("Team", teamSchema);
