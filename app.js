'use strict';
const express = require('express');
const app = express();
const port = 3000;

// app.get('/cat', (req, res) => {
//   res.send('From this endpoint you can get cats.')
// });

const cat = require('./routes/catRoute.js')
app.use('/', cat)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
