const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');

router.get('/', (req ,res) => {
    Player.find()
    .exec()
    .then(docs => {
        const allPlayersNames = docs.map(player=>player.name);
        console.log("***db***GET/--Found__allPlayersNames", allPlayersNames);
        res.status(200).json(allPlayersNames);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
        });
    });
});


router.get("/:name/:password", (req, res) => {
  const { name, password } = req.params;
  Player
  .findOne({ name, password })
  .exec()
  .then(doc => {
      console.log("***db***GET--Found__req.params", req.params);
      if(doc) {
          console.log('**db**Found',doc);
          res.status(200).json({ success: true, params: req.params });
      } else {
          res.status(404).json({ success: false, params: req.params });
      }
  });
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
        console.log("***db***POST--Save__req.body,result", req.body, result);
        res.status(200).json(req.body);
  })
  .catch( err => {
      console.log('ERROR!',err);
      res.status(500).json({err})
    });
});

router.delete('/:name/:password', (req, res) => {
    const { name, password } = req.params;
    Player.deleteMany({ name, password })
    .exec()
    .then( result => {
        console.log('DELETE', result);
        res.status(200).json(result);
    })
    .catch( err => {
        console.log('ERROR!!',err);
        res.status(500).json({ err });
    })
});


module.exports = router;