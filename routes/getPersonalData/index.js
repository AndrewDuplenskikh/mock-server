const data = require('./data.json');
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 1500);
});

module.exports = { getPersonalDataRouter: router };
