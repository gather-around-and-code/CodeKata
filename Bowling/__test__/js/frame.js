class Frame {
    #_first
    #_second
    #_totalScore

    constructor(first, second) {
        this.#_first = first;
        this.#_second = second;
        this.#_totalScore = first + second; 
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

    getTotalScore() {
        return this.#_totalScore;
    }
}

module.exports = Frame;