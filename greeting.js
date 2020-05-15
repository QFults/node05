const greeting = message => {
  if (typeof message === 'string') {
    return message
  } else {
    return 'Not a valid string'
  }
}

module.exports = greeting
