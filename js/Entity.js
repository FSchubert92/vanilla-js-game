export default class Entity {
  render(className, styles) {
    const el = document.createElement('div')
    el.className = className
    if (styles) {
      Object.keys(styles).forEach(key => {
        el.style[key] = styles[key]
      })
    }
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }

  remove() {
    this.onRemove && this.onRemove(this)
    this.el.remove()
  }
}
