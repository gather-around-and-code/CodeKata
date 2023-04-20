class Frame {
    #_first;
    #_second;
    #_state = true;

    constructor(first, second) {
        this.#_first = first;
        this.#_second = second;
    }

    throwResult(pins) {
      if (this.#_state == true) {
        this.#_first = pins;
        this.#_state = false;
      }
      else {
        this.#_second = pins;
        this.#_state = true;
      }
    }

    isSpare() {
        if(this.#_first + this.#_second === 10 && this.#_first != 10) {
            return true
        }
        return false
    }

    isStrike() {
        if(this.#_first === 10){
            return true
        }
        return false
    }

    getFirstScore() {
        return this.#_first;
    }

    getSecondScore() {
        return this.#_second;
    }

    getFrameScore() {
      return this.#_first + this.#_second;
    }
}

module.exports = Frame;