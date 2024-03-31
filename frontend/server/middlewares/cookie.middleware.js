const uuid = require('uuid');

function generateUserId(req, res, next) {
    if (!req.session.userId)
        req.session.userId = uuid.v4();

    next()
}

module.exports = {
    generateUserId
}