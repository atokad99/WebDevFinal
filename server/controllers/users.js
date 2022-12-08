const express = require('express');
const users = require('../models/users.js');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        users.getUsers()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })

    .post('/', (req, res, next) => {
        users.addUser(req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
;

module.exports = app;