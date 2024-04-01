const express = require('express');
const router = express.Router();

const joke = require("../controllers/joke.controller.js")


router.get("/all", joke.get)
router.post("/:jokeId/vote", joke.vote)

module.exports = router;