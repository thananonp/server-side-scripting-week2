'use strict';
const express = require('express');
const app = express();
const bodyparser = require("body-parser")
const cors = require('cors')
const port = 3000;
//allow the POST request to be read
app.use(bodyparser.urlencoded({extended: true}))
//allow other source of webpage to load resource from this web server
app.use(cors())

// app.get('/cat', (req, res) => {
//   res.send('From this endpoint you can get cats.')
// });

const cat = require('./routes/catRoute.js')
const user = require('./routes/userRoute.js')
app.use('/cat', cat)
app.use('/user', user)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
