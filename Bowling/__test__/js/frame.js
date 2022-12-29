class Frame {
    #_totalScore

    constructor(first, second) {
        this.#_totalScore = first + second; 
    }

    getTotalScore() {
        return this.#_totalScore;
    }
}

module.exports = Frame;