const Math = require('../math.js')
const math = new Math()

test('Should return result given valid input', () => {
  expect(math.add(5, 5)).toEqual(10)
  expect(math.subtract(5, 4)).toEqual(1)
  expect(math.multiply(12, 12)).toEqual(144)
  expect(math.divide(15, 3)).toEqual(5)
})

test('Should throw an Error if given invalid input', () => {
  expect(() => math.add('hotdog', 5)).toThrow('One or both is NaN')
  expect(() => math.subtract(12, 'hotdog')).toThrow('One or both is NaN')
  expect(() => math.multiply('hotdog', 'hotdog')).toThrow('One or both is NaN')
  expect(() => math.divide('hotdog', 12)).toThrow('One or both is NaN')
})
