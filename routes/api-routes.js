// This file offers a set of routes for displaying and saving data to the db

// Dependencies
// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {
    // GET route for getting all the flashcards
    app.get("/api/flashcards", function(req, res) {
        // findAll returns all entries for a table 
        db.Deck.findAll({}).then(function(dbDeck) {
            res.json(dbDeck);
        })
    })

    // POST route for saving new cards
    // DELETE route for deleting cards
};