const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');

router.get("/:name/:password", (req, res) => {
  const { name, password } = req.params;
  console.log("GETTTTT--Loggin-", req.params);
  let valid = name === "aris" ? true : false;
  res.status(200).json({ valid, params:req.params });
});

router.post("/", (req, res) => {
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
  .catch( err => {
      console.log('ERROR!',err);
      res.status(500).json({err})
    });
  console.log("POOOOOSSTTT--Register-", req.body);
  res.status(200).json(req.body);
});

module.exports = router;