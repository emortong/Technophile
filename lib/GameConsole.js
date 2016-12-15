function GameConsole(systemName) {
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
  var message = this.systemName + " plays " + game.title;
  return message;
};

module.exports = GameConsole;