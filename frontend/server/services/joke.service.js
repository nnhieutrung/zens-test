const joke = require("../models/joke.model.js")

async function findByUser(userId) {
    let result = await joke.findByUser(userId);
    return result.map(v => Object.assign({}, v));
}

async function vote(userId, jokeId, vote) {
    let result = await joke.voteByUser(userId, jokeId, vote);
    return result;
}

 
module.exports = {
    findByUser,
    vote
}