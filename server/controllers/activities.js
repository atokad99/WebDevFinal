const express = require('express');
const activities = require('../models/activities.js');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        activities.getActivities()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        activities.addActivity(req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .delete('/:_id', (req, res, next) => {
        activities.deleteActivity(req.params._id)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
;


module.exports = app;