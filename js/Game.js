import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'
import Bullet from './Bullet'

export default class Game {
  entities = []

  constructor() {
    this.createBirds()
    this.createCounter()
    this.loop()
    this.createHunter()
  }

  shoot = positionX => {
    this.entities = [
      ...this.entities,
      new Bullet({ onRemove: this.removeEntity, positionX }),
    ]
  }

  createBirds() {
    this.addBird()
    this.addBird()
    this.addBird()
    this.addBird()
    this.addBird()
  }

  createHunter() {
    this.hunter = new Hunter({ onShoot: this.shoot })
    this.entities = [...this.entities, this.hunter]
  }

  createCounter() {
    this.counter = new Counter()
  }

  addBird() {
    const config = {
      onRemove: this.removeEntity,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdsPoints,
    }

    this.entities = [...this.entities, new Bird(config)]
  }

  removeEntity = bird => {
    const index = this.entities.indexOf(bird)
    this.entities = [
      ...this.entities.slice(0, index),
      ...this.entities.slice(index + 1),
    ]
  }

  updateBirdsPoints = () => {
    this.counter.addBirdsPoint()
  }

  updatePlayerPoints = () => {
    this.counter.addPlayerPoint()
  }

  loop() {
    Math.random() < 1 / 60 && this.addBird()
    this.entities.forEach(entity => entity.update())
    requestAnimationFrame(() => {
      this.loop()
    })
  }
}
