const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const cookie = require('./middlewares/cookie.middleware.js');
const api = require('./routers/api.router.js');

//middleware
app.use(morgan('dev'));
app.use(bodyParser())
app.use(helmet())
app.use(session({ secret: process.env.SESSION_SECRET || 'WebSessionSecret', cookie: { maxAge: 60000 }}))
app.use('/', cookie.generateUserId);


//API
app.use('/api', api);

//Hosting
app.use('/', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = app;