import Entity from './Entity'
export default class Clouds extends Entity {
  defaultConfig = {
    speed: 1,
    position: { x: 0, y: 200 + Math.random() * 500 },
  }

  constructor(config) {
    super()
    config = { ...this.defaultConfig, ...config }
    const { speed, position, onRemove } = config
    this.speed = speed
    this.onRemove = onRemove
    this.position = position
    this.el = this.render('cloud', { top: position.y + 'px' })
  }

  update() {
    this.position.x += this.speed
    if (this.position.x > window.innerWidth) {
      this.remove()
    } else {
      this.el.style.left = this.position.x + 'px'
    }
  }
}
