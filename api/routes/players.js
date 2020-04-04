const express = require("express");
const router = express.Router();


router.post("/loggin", (req, res) => {
  const { body } = req;
  console.log("POOOOOSSTTT--Loggin-", body);
  let valid = body.name === "aris" ? true : false;
  res.status(200).json({ valid, body });
});

router.post("/register", (req, res) => {
  const { body } = req;
  console.log("POOOOOSSTTT--Register-", body);
  res.status(200).json(body);
});

module.exports = router;