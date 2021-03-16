// Controller
'use strict';

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) => {
    let selectedCat = cats.filter((cat) => cat.id === req.params.id)
    res.json(selectedCat)
}

const addNewCat = (req, res) => {
    console.log(req.file)
    if (req.file != null)
        res.send(req.file.originalname + "File received")
    else res.send("Error")
}

module.exports = {
    cat_list_get,
    cat_get,
    addNewCat
};