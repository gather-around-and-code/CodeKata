class Player {
  #_name
  #_score = 300
  #_currentFrame = 2

  constructor(name) {
    this.#_name = name; 
  }

  getCurrentFrame() {
    // const frame = new Frame()
    return this.#_currentFrame;
  }

  getScore() {
    return this.#_score;
  }
}

module.exports = Player;