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

  getFirstScore(frameNumber) {
    return this.#_frames[frameNumber - 1].getFirstScore(); 
  }

  getSecondScore(frameNumber) {
    return this.#_frames[frameNumber - 1].getSecondScore();
  }

  getPins(frameNumber) {
    let pins = [];

    const first = this.getFirstScore(frameNumber); //9
    const second = this.getSecondScore(frameNumber); // 1
    const third = this.getFirstScore(frameNumber + 1); // 7
    const fourth = this.getSecondScore(frameNumber + 1); // 2
    const fifth = this.getFirstScore(frameNumber + 2);

    if (first == 10) {
      if (third == 10) {
        pins.push(first, third, fifth);
      }
      else {
        pins.push(first, third, fourth);
      }
      
      return pins;
    }

    pins.push(first, second, third);
    return pins;
  }

  calculateScore(pins){
    let score = 0;
    let pin = 0;
      //strike
    if( pins[pin] === 10){
        score += 10 + pins[pin + 1] + pins[pin + 2];
    }else if(pins[pin] + pins[pin+1] === 10){ // spare
        score += 10 + pins[pin + 2];
    }else if (pins[pin] == undefined) {
      return score;
    }else{
        score += pins[pin];
    }

    return score;
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