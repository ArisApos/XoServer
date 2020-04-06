const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middlewares/check-auth');
const Player = require('../models/player');

// multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/playersAssets/avatars/');
    },
    filename: (req, file, cb) => {
        const fileExt = file.mimetype.split('/')[1];
        cb(null, req.body.name+'.'+fileExt);
    }
});
const limmits = { fileSize: 1024 * 1024 * 5 };
const fileFilter = (req, file, cb) => {
    const { name } = req.body;

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || !file) {
        console.log('wright mimetype');
          Player.findOne({ name }).exec().then(doc=>{
              if(doc) {
                  console.log('FAIL!!, name exists');
                  cb(null, false);
                  req.file.valid = false;
              } else {
                 console.log("CONGRATS!!,name does not exists");
                 cb(null, true);
              }
          })

    } else {
       console.log('FAIL!! WRONG mimetype');
       cb(null, false); 
    }  
};

const upload = multer({ storage, limmits, fileFilter });


router.get('/', checkAuth, (req ,res) => {
    Player.find()
    .select('name avatar points')
    .exec()
    .then(docs => {
        const allPlayersNames = docs.map(({name, points, avatar})=>({name, points, avatar}));
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
  .findOne({ name })
  .exec()
  .then(doc => {
      console.log("***db***GET--Found__req.params", req.params);
      if(doc){
        console.log("**db*name*Found___Wait for validation", doc);
        bcrypt.compare(password, doc.password, (err, result)=>{
          if(err) res.status(401).json({ authSuccess: false, message:'Authentication Fail, HashingProblem', params: req.params });
          if(result) {
              const token = jwt.sign({name, id: doc._id},process.env.JWT_KEY,{expiresIn: '1h'});
              res.status(200).json({ authSuccess: true, message:'Authentiaction Success', token });
          }
          if(!result) res.status(401).json({ authSuccess: false, message:'Authentication Fail', params: req.params });
        });
      } else return res.status(401).json({ authSuccess: false, message:'Authentication Fail', params: req.params });
  });
});

router.post("/", upload.single('avatar'),  (req, res) => {
    console.log('request file', req.file)
  const { name, password, maxPlayers, maxTime } = req.body;
  // Check if name exists
  Player.findOne({ name })
  .exec()
  .then(doc => {
    // check if name exists or if mimeType was wrong
    if(doc) return res.status(409).json({ successfulRegistration: false, message: `name ${ name } already exists`, body: req.body });
    bcrypt.hash(password, 10, (err, hash)=>{
        if(err) return res.status(500).json({ successfulRegistration: false, message: `fail to create hash`, body: req.body });
        const password = hash;
        const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        name,
        password,
        maxPlayers,
        maxTime,
        avatar: req.file ? req.file.path.split('\\').join('/').split('public').join('') : undefined
    });
    player
        .save()
        .then(result => {
        console.log("***db***POST--Save__req.body,result", req.body, result);
        const successfulRegistration = true;
        const message = `May the force be with you ${result.name}`;
        res.status(200).json({successfulRegistration, message, result });
        })
        .catch((err) => {
        console.log("ERROR!", err);
        res.status(500).json({ successfulRegistration: false, message: 'Sorry internal error, coudnt save user to db', err });
        });
    });

  });
});

router.delete('/:name/:password', (req, res) => {
    const { name, password } = req.params;
    Player.deleteOne({ name, password })
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

router.patch('/:name/:password', (req,res) => {
    const { name, password } = req.params;
    const { points } = req.body; 
    console.log(name, points)
    Player
    .update({ name, password }, { $set: { points } })
    .exec()
    .then(result => {
        console.log('PATCH',result);
        res.status(200).json(result);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    });
});


module.exports = router;

