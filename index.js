'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./utils/db');

db.on('connected', () => {
    app.listen(3000);
});
