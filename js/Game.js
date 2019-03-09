import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'
import Bullet from './Bullet'
import Clouds from './Clouds'

export default class Game {
  birds = []
  bullets = []
  clouds = []

  constructor() {
    this.createCounter()
    this.createHunter()
    this.loop()
  }

  shoot = positionX => {
    this.bullets = [
      ...this.bullets,
      new Bullet({ onRemove: this.removeBullet, positionX }),
    ]
  }

  createCounter() {
    this.counter = new Counter()
  }

  createHunter() {
    this.hunter = new Hunter({ onShoot: this.shoot })
  }

  addBird() {
    const config = {
      onRemove: this.removeBird,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdsPoints,
    }

    this.birds = [...this.birds, new Bird(config)]
    console.log(this.birds)
  }

  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
  }
  addCloud() {
    this.clouds = [...this.clouds, new Clouds(this.removeCloud)]
    console.log(this.clouds)
  }
  removeCloud = cloud => {
    const index = this.clouds.indexOf(cloud)
    this.clouds = [
      ...this.clouds.slice(0, index),
      ...this.clouds.slice(index + 1),
    ]
  }

  removeBullet = bullet => {
    const index = this.bullets.indexOf(bullet)
    this.bullets = [
      ...this.bullets.slice(0, index),
      ...this.bullets.slice(index + 1),
    ]
  }

  updateBirdsPoints = () => {
    this.counter.addBirdsPoint()
  }

  updatePlayerPoints = () => {
    this.counter.addPlayerPoint()
  }

  checkForBirdHit = bullet => {
    const { x: bulletX, y: bulletY } = bullet.position

    this.birds.forEach(bird => {
      const { x: birdX, y: birdY } = bird.position

      if (
        birdX < bulletX &&
        birdX + 40 > bulletX &&
        birdY > bulletY &&
        birdY - 40 < bulletY
      ) {
        bird.remove()
        bullet.remove()
        this.updatePlayerPoints()
      }
    })
  }

  loop() {
    Math.random() < 1 / 60 && this.addBird()
    if (this.counter.playerPoints === 5) {
      Math.random() < 1 / 500 && this.addCloud()
    } else if (this.counter.playerPoints > 10) {
      Math.random() < 1 / 300 && this.addCloud()
    } else if (this.counter.playerPoints > 30) {
      Math.random() < 1 / 200 && this.addCloud()
    }
    const entities = [
      ...this.birds,
      ...this.bullets,
      ...this.clouds,
      this.hunter,
    ]
    entities.forEach(entity => entity.update())
    this.bullets.forEach(this.checkForBirdHit)
    requestAnimationFrame(() => this.loop())
  }
}
