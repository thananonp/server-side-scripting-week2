'use strict';
const express = require('express');
const app = express();
const bodyparser = require("body-parser")
const cors = require('cors')
const port = 3000;
//serving static content
app.use(express.static('public_html'))
//allow the POST request to be read
app.use(bodyparser.urlencoded({extended: true}))
//allow other source of webpage to load resource from this web server
app.use(cors())

// app.get('/cat', (req, res) => {
//   res.send('From this endpoint you can get cats.')
// });

const cat = require('./routes/catRoute.js')
const user = require('./routes/userRoute.js')
const passport = require('./utils/passport')
const authRoute = require('./routes/authRoute')
app.use('/auth',authRoute)
app.use('/cat', passport.authenticate('jwt', {session: false}),cat)
app.use('/user', user)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
