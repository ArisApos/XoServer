const express = require("express");
const router = express.Router();
const onRegistrationAvatarUpload = require("../middlewares/multer");
const checkAuth = require('../middlewares/check-auth');
const PlayersController = require('../controllers/players');


router.get("/", checkAuth, PlayersController.getAllPlayers);

router.get("/:name/:password", PlayersController.getAPlayer);

router.post("/", onRegistrationAvatarUpload, PlayersController.registerPlayer);

router.delete('/:name/:password', checkAuth, PlayersController.deleteAPlayer);

router.patch('/:name/:password', checkAuth, PlayersController.editAPlayer);


module.exports = router;

