class Player {
  #_name
  #_currentFrameNumber = 1;
  #_frames = []
  
  constructor(name) {
    this.#_name = name; 
  }

  addFrame(frame) {
    this.#_frames.push(frame);
    this.#_currentFrameNumber += 1;
  }

  getFrames() {
    return this.#_frames;
  }
  
  getCurrentFrameNumber() {
    // const frame = new Frame()
    return this.#_currentFrameNumber;
  }

  calcualteTotalScore() {
    
    let score = 0;
    this.#_frames.forEach(frame => {
      score += frame.getScore();
    });
    
    return score;
  }

  getFrameScore(frameNumber) {
    return this.#_frames[frameNumber].getScore();
  }
}

module.exports = Player;