'use strict';
// catRoute
const express = require('express');
const router = express.Router();

const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);

module.exports = router;
//
// router.route('/cat')
//     .delete(function (req, res) {
//         res.send('With this endpoint you can delete cats.')
//     })
//     .post(function (req, res) {
//         res.send('With this endpoint you can add cats.')
//     })
//     .put(function (req, res) {
//         res.send('With this endpoint you can edit cats.')
//     })
//
// router.get('/cat/:id', function (req, res) {
//     res.send("You requested a cat whose id is " + req.params.id)
//     console.log("Cat " + req.params.id + " is requested")
// })
module.exports = router