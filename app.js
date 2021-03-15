'use strict';
const express = require('express');
const app = express();
const port = 3000;

// app.get('/cat', (req, res) => {
//   res.send('From this endpoint you can get cats.')
// });

app.route('/cat')
    .delete(function (req, res) {
        res.send('With this endpoint you can delete cats.')
    })
    .post(function (req, res) {
        res.send('With this endpoint you can add cats.')
    })
    .put(function (req, res) {
        res.send('With this endpoint you can edit cats.')
    })

app.get('/cat/:id',function (req,res){
    res.send("You requested a cat whose id is " + req.params.id)
    console.log("Cat "+ req.params.id + " is requested")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
