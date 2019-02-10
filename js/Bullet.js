import Entity from './Entity'

export default class Bullet extends Entity {
  position = { x: 0, y: window.innerHeight - 120 }
  speed = 20

  constructor(config) {
    super()
    const { onRemove, positionX } = config
    this.onRemove = onRemove
    this.position.x = positionX
    this.el = this.render('bullet', { left: positionX + 'px' })
  }

  update() {
    this.position.y -= this.speed
    this.el.style.top = this.position.y + 'px'
    if (this.position.y < 0) {
      this.remove()
    }
  }
}
