/**
 * @class 队列
 */

class Queue {
  constructor() {
    this._items = []
  }

  // 向队列尾部添加一个(或多个)新的项
  enqueue(item) {
    this._items.push(item)
  }

  // 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素
  dequeue() {
    return this._items.shift()
  }

  // 返回队列第一个元素，队列不做任何变动
  head() {
    return this._items[0]
  }

  // 返回队列最后一个元素，队列不做任何变动
  tail() {
    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return !this._items.length
  }

  size() {
    return this._items.length
  }

  clear() {
    this._items = []
  }
}

/**
 * @function 约瑟夫环（普通模式）
 * @description 要求: 有一个数组a[100]存放0~99；要求每隔两个数删掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数。分析: 按数组创建队列，依次判断元素是否满足为指定位置的数，如果不是则enqueue到尾部，否则忽略，当仅有一个元素时便输出
 */

const arr_100 = Array.from({ length: 100 }, (_, i) => i * i)

const delRing = list => {
  const queue = new Queue()
  list.forEach(e => { queue.enqueue(e) })
  
  let index = 0
  while (queue.size() !== 1) {
    const item = queue.dequeue()
    index += 1
    if (index % 3 !== 0) {
      queue.enqueue(item)
    }
  }

  return queue.tail()
}

/**
 * @function 约瑟夫环（普通模式）
 * @description 要求: 使用队列计算斐波那契数列的第n项
 * @description 分析: 斐波那契数列的前两项固定为1，后面的项为前两项之和，依次向后，这便是斐波那契数列。
 */

const fibonacci = n => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(1)

  let index = 0
  while (index < n -2) {
    index += 1
    const delItem = queue.dequeue()
    const headItem = queue.head()
    const nextItem = delItem + headItem
    queue.enqueue(nextItem)
  }
  return queue.tail()
}
