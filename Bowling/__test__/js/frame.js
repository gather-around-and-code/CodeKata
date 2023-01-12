class Frame {
    #_first
    #_second
    #_frameScore = undefined;

    constructor(first, second) {
        this.#_first = first;
        this.#_second = second;
        this.#_frameScore = first + second; 
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

    getFrameScore() {
        return this.#_frameScore;
    }

    getFirstScore() {
        return this.#_first;
    }

    getSecondScore() {
        return this.#_second;
    }

    setFrameScore(score){    
        this.#_frameScore = score;
    }   
}

module.exports = Frame;