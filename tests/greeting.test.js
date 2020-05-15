const greeting = require('../greeting.js')

test('Run greeting and return "Hello World!"', () => {
  expect(greeting('Hello World!')).toEqual('Hello World!')
})

test('Run greeting and return "Goodbye World!"', () => {
  expect(greeting('Goodbye World!')).toEqual('Goodbye World!')
})

test('Error message when not a string', () => {
  expect(greeting(5)).toEqual('Not a valid string')
  expect(greeting(true)).toEqual('Not a valid string')
})

test('Error message when nothing is passed', () => {
  expect(greeting()).toEqual('Not a valid string')
})
