const axios = require('axios')

class Movie {
  constructor () {
    this.buildUrl = movie => {
      return `http://www.omdbapi.com/?apikey=trilogy&t=${movie}`
    }
    this.search = movie => {
      return axios.get(this.buildUrl(movie))
    }
  }
}

module.exports = Movie
