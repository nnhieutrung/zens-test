const express = require('express');
const router = express.Router();

const joke = require("./joke.router.js")


router.use("/joke/", joke)

module.exports = router;