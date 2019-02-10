import Entity from './Entity'
export default class Bullet extends Entity {
  position = { x: 0, y: 0 }
  speed = 20

  constructor(config) {
    super()
    const { onRemove, positionX } = config
    this.el = this.render('bullet', { left: positionX + 'px' })
    this.onRemove = onRemove
  }
  update() {
    this.position.y += this.speed
    this.el.style.bottom = this.position.y + 'px'
    if (this.position.y > window.innerHeight) {
      this.remove()
    }
  }
}
