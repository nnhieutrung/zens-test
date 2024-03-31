const db = require("../utils/database.js");

function findByUser(userId) {
    return new Promise((resolve, reject) => {
        db.query(`
        SELECT joke.*
        FROM jokes AS joke 
        LEFT OUTER JOIN 
            (SELECT * FROM joke_votes WHERE \`user\` = ?) AS vote 
        ON joke.joke_id = vote.joke_id
        WHERE vote.joke_id IS NULL;`
        , [userId], (err, res) => {
            if (err) {
              console.log("error: ", err);
              reject(err);
              return;
            }
        
            resolve(res);
        });
    })
}

function voteByUser(userId, jokeId, vote) {
    return new Promise((resolve, reject) => {
        db.query(`INSERT IGNORE INTO joke_votes(joke_id, user, vote) VALUES(?, ?, ?)`, [jokeId, userId, vote], (err, res) => {
            if (err) {
              console.log("error: ", err);
              reject(err);
              return;
            }
        
            resolve(res);
        });
    })
}

module.exports = {
    findByUser,
    voteByUser,
}