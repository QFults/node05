class DigitalPal {
  constructor() {
    this.hungry = false
    this.sleep = false
    this.bored = true
    this.age = 0
    this.outside = false
    this.houseCondition = 100

    this.feed = () => {
      if (this.hungry) {
        console.log('That was yummy!')
        this.hungry = false
        this.sleepy = true
      } else {
        console.log('No thanks! I am full')
      }
    }

    this.sleep = () => {
      if (this.sleepy) {
        console.log('Zzzzzzzz')
        this.sleepy = false
        this.bored = true
        this.increaseAge()
      } else {
        console.log('No way! I am not tired')
      }
    }

    this.play = () => {
      if (this.bored) {
        console.log('Yay! Let us play!')
        this.bored = false
        this.hungry = true
      } else {
        console.log('Not right now. Later?')
      }
    }

    this.increaseAge = () => {
      this.age += 1
      console.log(`Happy Birthday to me! I am ${this.age} years old`)
    }

    this.bark = () => {
      console.log('Woof! Woof!')
    }

    this.goOutside = () => {
      if (this.outside) {
        console.log('We are already outside though...')
      } else {
        console.log('Yay! I love the outdoors!')
        this.outside = true
        this.bark()
      }
    }

    this.goInside = () => {
      if (this.outside) {
        console.log('Do we have to? Fine...')
        this.outside = false
      } else {
        console.log('I am already inside...')
      }
    }

    this.meow = () => {
      console.log('Meow! Meow!')
    }

    this.destroyFuniture = () => {
      if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log('MUAHAHAHA! TAKE THAT FURNITURE!')
        this.bored = false
        this.sleepy = true
      }
    }

    this.buyNewFurniture = () => {
      this.houseCondition += 50
      console.log('Are you sure about that?')
    }
  }
}

const dog = new DigitalPal()
