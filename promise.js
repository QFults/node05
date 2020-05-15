const greeting = (message) => {

  return new Promise((resolve, reject) => {
    if (message) {
      resolve(message)
    } else {
      reject(new Error('No message passed'))
    }
  })
}

greeting('Hello World!')
  .then(message => {
    console.log(message)
  })
  .catch(err => console.log(err))


  const Math = equation => {

  }

  Math('12 * true')
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
