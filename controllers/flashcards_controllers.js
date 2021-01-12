// Dependencies
var express = require("express");

var router = express.Router();

var flashcard = require("../models/deck.js");

// Read and display db
router.get("/", function(req, res) {
    flashcard.selectAll(function(data) {
        var hbsObject = {
            flashcards: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

// Export routes for server.js to use
module.exports = router;