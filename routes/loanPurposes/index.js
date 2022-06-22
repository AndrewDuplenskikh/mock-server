const data = require("./data.json");
const express = require("express");
const router = express.Router({ mergeParams: true });


router.get("/", (req, res) =>{
    res.send(data);
})

module.exports = { loanPurposesRouter: router }