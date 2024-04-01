const path = require('path');
const app = require('./src/server.js');

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
