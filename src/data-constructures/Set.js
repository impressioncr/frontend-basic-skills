/**
 * @description 集合
 */
class Set {
  constructor() {
    this._items = {}
    this._length = 0
  }
  // 添加成员时，如果已有成员则不操作。以[value: value]的形式存储在对象中
  add(value) {
    if (this.has(value)) return false
    this._items[value] = value
    this._length += 1
    return
  }
  // 移除成员时，如果没有对应的成员则不操作
  remove(value) {
    if (!this.has(value)) return false
    delete this._items[value]
    this._length -= 1
    return true
  }

  value() {
    return Object.value(this._items)
  }

  has(value) {
    return this._items.hasOwnProperty(value)
  }

  clear() {
    this._items = {} 
    this._length = 0
  }

  size() {
    return this._length
  }

  isEmpty() {
    return !this._length
  }
}