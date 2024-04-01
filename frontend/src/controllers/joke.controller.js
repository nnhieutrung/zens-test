const joke = require("../services/joke.service.js")

async function get(req, res) {
    let result = await joke.findByUser(req.session.userId);
    res.status(200).json(result);
}

async function vote(req, res) {
    let userId = req.session.userId
    let jokeId = req.params.jokeId;
    let vote = (req.body.vote == 'true') ? 1 : 0;
    if (await joke.vote(userId, jokeId, vote))
        res.status(200)
    
    console.log(req.body.vote)
    res.json({});
}



module.exports = {
    get,
    vote
}