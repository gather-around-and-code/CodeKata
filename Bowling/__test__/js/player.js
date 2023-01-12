class Player {
  #_name
  #_currentFrame = 1;
  #_frames = []
  
  constructor(name) {
    this.#_name = name; 
  }

  addFrame(frame) {
    this.#_frames.push(frame);
    this.#_currentFrame += 1;
  }
  
  getCurrentFrame() {
    // const frame = new Frame()
    return this.#_currentFrame;
  }

  calcualteTotalScore() {
    
    let score = 0;
    this.#_frames.forEach(frame => {
      score += frame.getFrameScore();
    });
    
    return score;
  }
}

module.exports = Player;