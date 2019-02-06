export default class Counter {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
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
  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    document.body.insertAdjacentElement('afterbegin', el)
    return el
  }
}
