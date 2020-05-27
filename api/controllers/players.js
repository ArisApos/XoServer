const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Player = require("../models/player");

// get all players lllllllllllllllaaaaa
exports.getAllPlayers = (req, res) => {
    Player.find()
      .select("name avatar points maxPlayers maxTime")
      .exec()
      .then((docs) => {
        const allPlayers = docs.map(({ name, avatar, points, maxPlayers, maxTime }) => ({
          name,
          avatar,
          points,
          maxPlayers,
          maxTime
        }));
        console.log("***db***GET/--Found__allPlayersNames", allPlayers);
        res.status(200).json({ allPlayers });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({message: 'Internal error'});s
      });
};

// get specific player

exports.getAPlayer = (req, res) => {
  const { name, password } = req.params;
  Player
  .findOne({ name })
  .exec()
  .then(doc => {
      console.log("***db***GET--Found__req.params", req.params);
      if(doc){
        console.log("**db*name*Found___Wait for validation", doc);
        bcrypt.compare(password, doc.password, (err, result)=>{
          if(err)  res.status(401).json({ message:'Authentication Fail, HashingProblem', params: req.params });
          if(result) {
              const { name, avatar, points, maxTime, maxPlayers } = doc;
              const token = jwt.sign({name, id: doc._id},process.env.JWT_KEY,{expiresIn: '1h'});
              res.status(200).json({ message:'Authentiaction Success', token, status: { name, avatar, points, maxTime, maxPlayers} });
          }
          if(!result) res.status(401).json({  message:'Authentication Fail', params: req.params });
        });
      } else return res.status(401).json({  message:'Authentication Fail', params: req.params });
  });
}

// Register a player

exports.registerPlayer = (req, res) => {
    console.log('request file', req.file)
  const { name, password, maxPlayers, maxTime } = req.body;
  // Check if name exists
  Player.findOne({ name })
  .exec()
  .then(doc => {
    // check if name exists or if mimeType was wrong
    if(doc) return res.status(409).json({  message: `name ${ name } already exists`, body: req.body });
    bcrypt.hash(password, 10, (err, hash)=>{
        if(err) return res.status(500).json({ message: `fail to create hash`, body: req.body });
        const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        name,
        password: hash,
        maxPlayers,
        maxTime,
        avatar: req.file ? req.file.path.split('\\').join('/').split('public').join('') : undefined
    });
    player
        .save()
        .then(result => {
        console.log("***db***POST--Save__req.body,result", req.body, result);
        const message = `Succesful registration. May the force be with you ${result.name}`;
        res.status(200).json({message, name, password });
        })
        .catch((err) => {
        console.log("ERROR!", err);
        res.status(500).json({ message: 'Sorry internal error, coudnt save user to db', err });
        });
    });

  });
}

// Delete a player

exports.deleteAPlayer = (req, res) => {
  const { name, password } = req.params;
  Player.deleteOne({ name, password })
    .exec()
    .then((result) => {
      console.log("DELETE", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("ERROR!!", err);
      res.status(500).json({ err });
    });
};

// Update a player

exports.editAPlayer = (req, res) => {
  const { name, password } = req.params;
  const { points } = req.body;
  console.log(name, points);
  Player.update({ name, password }, { $set: { points } })
    .exec()
    .then((result) => {
      console.log("PATCH", result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};