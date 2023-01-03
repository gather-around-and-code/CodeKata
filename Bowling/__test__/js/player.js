class Player {
  #_name
  #_currentFrame = 2
  #_frames = []
  
  constructor(name) {
    this.#_name = name; 
    
  }

  addFrame(frame) {
    this.#_frames.push(frame);
  }
  
  getCurrentFrame() {
    // const frame = new Frame()
    return this.#_currentFrame;
  }

  calcualteTotalScore() {
    
    let score = 0;
    this.#_frames.forEach(frame => {
      score += frame.getTotalScore();
    });
    
    return score;
  }
}

module.exports = Player;