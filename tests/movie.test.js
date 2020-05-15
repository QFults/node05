const Movie = require('../movie.js')
const axios = require('axios')

jest.mock('axios')

test('Should search OMDB API for given movie', () => {
  const movie = new Movie()
  const title = 'Goodfellas'

  axios.get.mockReturnValue(new Promise(resolve => {
    resolve({ data: { } })
  }))

  expect(movie.search(title)).resolves.toEqual({ data: { } })
  expect(axios.get).lastCalledWith(movie.buildUrl(title))
})
