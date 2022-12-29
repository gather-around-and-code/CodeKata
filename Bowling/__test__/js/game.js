class Game{
  #_players;
  #_currentFrame;

  constructor() {
    this.#_players = [];
  }


  addPlayer(name) {
    this.#_players.push(name);
  }

  getPlayers() {
    return this.#_players.length;
  }
}

module.exports = Game;