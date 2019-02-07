export default class Bird {
  defaultConfig = {
    color: 'black',
    speed: 2 + Math.random() * 4,
    position: {
      x: 0,
      y: 200 + Math.random() * 200,
    },
  }

  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, onRemove, onClick, onEscape } = config
    this.onClick = onClick
    this.onRemove = onRemove
    this.onEscape = onEscape
    this.color = color
    this.position = position
    this.speed = speed
    this.el = this.render()
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      this.onClick()
      this.remove()
    })
  }

  remove() {
    this.onRemove(this)
    this.el.remove()
  }

  update() {
    this.position.x += this.speed
    if (this.position.x > window.innerWidth) {
      this.remove()
      this.onEscape()
    } else {
      this.el.style.left = this.position.x + 'px'
      this.el.style.top =
        this.position.y + Math.sin(this.position.x / 100) * 100 + 'px'
    }
  }

  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
