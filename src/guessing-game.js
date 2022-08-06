class GuessingGame {
    constructor() {
      this.array = []
    }

    setRange(min, max) {

      this.min = min;
      this.max = max;
    }

    guess() {
      this.array = [];
      let num = this.min;
        for (let i = 0; i <= (this.max - this.min); i++) {
            this.array.push(num);
            num++
        }
      this.tryNumIndex = Math.trunc(this.array.length/2);
      return this.array[Math.trunc(this.array.length/2)];
    }

    lower() {
      this.setRange(this.min, this.array[this.tryNumIndex])
    }

    greater() {
      this.setRange(this.array[this.tryNumIndex], this.max)
    }
}

module.exports = GuessingGame;
