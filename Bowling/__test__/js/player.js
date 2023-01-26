const Frame = require("../js/frame");

class Player {
  #_frames = [];
  #_pins = []; //[9, 1, 8, 1, 10, 0, 7, 1... 10, 10, 10]
  #_currentFrame = 0;

  addPins(pins) {
    this.#_pins.push(pins);
  }

  frameScore(frameNumber) {
    return this.#_frames[frameNumber - 1].getFrameScore();
  }

  score() {
    return this.frameScore(this.#_currentFrame);
  }
}

module.exports = Player;