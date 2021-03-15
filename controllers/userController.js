// Controller
'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;
//delete password before sending out
users.forEach(user => delete user['password'])

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUser = (req, res) => {
    let selectedUser = users.filter((user) => user.id === req.params.id)
    res.json(selectedUser)
}

module.exports = {
    getAllUsers,
    getUser
};