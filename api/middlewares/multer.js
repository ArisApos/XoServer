const multer = require("multer");
const Player = require('../models/player');

// multer middleware configuration for upload pic on player's registration

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/playersAssets/avatars/");
  },
  filename: (req, file, cb) => {
    const fileExt = file.mimetype.split("/")[1];
    cb(null, req.body.name + "." + fileExt);
  },
});
const limmits = { fileSize: 1024 * 1024 * 5 };
const fileFilter = (req, file, cb) => {
  const { name } = req.body;

  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    !file
  ) {
    console.log("wright mimetype");
    Player.findOne({ name })
      .exec()
      .then((doc) => {
        if (doc) {
          console.log("FAIL!!, name exists");
          cb(null, false);
          req.file.valid = false;
        } else {
          console.log("CONGRATS!!,name does not exists");
          cb(null, true);
        }
      });
  } else {
    console.log("FAIL!! WRONG mimetype");
    cb(null, false);
  }
};

const onRegistrationAvatarUpload = multer({ storage, limmits, fileFilter }).single('avatar');

module.exports = onRegistrationAvatarUpload;