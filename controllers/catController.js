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

module.exports = {
    cat_list_get,
    cat_get
};