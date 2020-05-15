class Math {
  constructor() {
    this.add = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b
      } else {
        throw new Error('One or both is NaN')
      }
    }
    this.subtract = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b
      } else {
        throw new Error('One or both is NaN')
      }
    }
    this.multiply = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a * b
      } else {
        throw new Error('One or both is NaN')
      }
    }
    this.divide = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a / b
      } else {
        throw new Error('One or both is NaN')
      }
    }
  }
}

module.exports = Math
