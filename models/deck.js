module.exports = function(sequelize, DataTypes) {
  var Deck = sequelize.define("Deck", {
    Question: DataTypes.STRING,
    Answer: DataTypes.STRING
  });
  return Deck;
};
