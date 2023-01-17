class Frame {
    #_first
    #_second
    #_score = undefined;

    constructor(first, second) {
        this.#_first = first;
        this.#_second = second;
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

    getScore() {
        return this.#_score;
    }

    setScore(score){    
        this.#_score = score;
    }   
}

module.exports = Frame;