import Entity from './Entity'

export default class Counter extends Entity {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    super()
    this.el = this.render('counter')
  }
  addPlayerPoint() {
    this.playerPoints = this.playerPoints + 1
    this.updatePlayerPoints()
  }

  addBirdsPoint() {
    this.birdsPoints = this.birdsPoints + 1
    this.updatePlayerPoints()
  }

  updatePlayerPoints() {
    this.el.innerHTML = `${this.playerPoints} : ${this.birdsPoints}`
  }
}
