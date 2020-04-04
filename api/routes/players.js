const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');

router.post("/loggin", (req, res) => {
  const { body } = req;
  console.log("POOOOOSSTTT--Loggin-", body);
  let valid = body.name === "aris" ? true : false;
  res.status(200).json({ valid, body });
});

router.post("/register", (req, res) => {
  const { name, password, maxPlayers, maxTime  } = req.body;
  const player = new Player({
    id: new mongoose.Types.ObjectId(),
    name,
    password,
    maxPlayers,
    maxTime,
  });
  player
  .save()
  .then(result => {
      console.log('player.save() result', result);
  })
  .catch(err=>console.log('ERROR!',err));
  console.log("POOOOOSSTTT--Register-", req.body);
  res.status(200).json(req.body);
});

module.exports = router;