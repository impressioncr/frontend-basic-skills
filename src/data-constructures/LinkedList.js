/**
 * @description 链表
 */

// 节点基类
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 初始化链表
class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }
  // 在链表尾端添加元素
  append(data) {
    const newNode = new Node(data)
    if (this._length === 0) {
      this._head = newNode
      this._tail = newNode
    } else {
      // this._tail就是上次添加到链表末尾的对象；每次添加都要更改this._tail为本次添加的节点
      this._tail.next = newNode
      this._tail = newNode
    }

    this._length += 1
    return true
  }
  // 打印链表
  print() {
    let ret = []
    // 遍历需从链表头部开始
    let currNode = this._head
    // 单链表最终指向null，作为结束标志
    while (currNode) {
      ret.push(currNode.data)
      // 轮询至下一节点
      currNode = currNode.next
    }
    console.log(ret.join(' --> '))
  }
  // 获取指定位置元素
  getNode(index) {
    let currNode = this._head
    let currIndex = 0
    while (currIndex < index) {
      currIndex += 1
      currNode = currNode.next
    }
    return currNode
  }
  // 在链表指定位置插入元素
  insert(index, data) {
    // 不满足条件的索引值
    if (index < 0 || index > this._length) return false
    // 插入尾部
    if (index === this._length) return this.append(data)

    const insertNode = new Node(data)
    if (index === 0) {
      // 插入头部
      insertNode.next = this._head
      this._head = insertNode
    } else {
      // 插入中间
      const prevTargetNode = this.getNode(index -1)
      const targetNode = prevTargetNode.next
      // 重新连接节点
      prevTargetNode.next = insertNode
      insertNode.next = targetNode
    }
  }
  // 在链表指定位置移除元素
  removeAt(index) {
    if (index < 0 || index >= this._length) return false
    
    if (index === 0) {
      this._head = this._head.next
    } else {
      const prevNode = this.getNode(index - 1)
      const delNode = prevNode.next
      const nextNode = delNode.next
      // 若移除为最后一个元素
      if (!nextNode) this._tail = prevNode
      prevNode.next = nextNode
    }
  }
  // 判断数据是否存在与链表内，存在返回index, 否则返回-1
  indexOf(data) {
    let currNode = this._head
    let index = 0
    while (currNode) {
      if (currNode.data === data) return index
      index +=1
      currNode = currNode.next
    }
    return -1
  }
  // 链表翻转
  reverse() {
    if (!this._head) {
      return false
    }
    let prevNode = null
    let currNode = this._head
    while (currNode) {
      const nextNode = currNode.next
      currNode.next = prevNode
      prevNode = currNode
      currNode = nextNode
    }
    let temp = this._tail
    this._tail = this._head
    this._head = temp
    return true
  }
  getHead() {
    return this._head
  }
  getTail() {
    return this._tail
  }
  size() {
    return this._length
  }
}


class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
  }

  append(data) {
    const newNode = new DoublyNode(data);

    if (this._length === 0) {
      this._head = newNode
      this._tail = newNode
    } else {
      newNode.prev = this._tail // NEW
      this._tail.next = newNode
      this._tail = newNode
    }

    this._length += 1
    return true
  }

  insert(index, data) {
    if (index < 0 || index > this._length) return false
    if (index === this._length) return this.append(data)

    const insertNode = new DoublyNode(data)
    if (index === 0) {
      insertNode.prev = null // NEW
      this._head.prev = insertNode // NEW
      insertNode.next = this._head
      this._head = insertNode
    } else {
      // 找到原有位置节点
      const prevTargetNode = this.getNode(index - 1)
      const targetNode = prevTargetNode.next
      // 重塑节点连接
      prevTargetNode.next = insertNode
      insertNode.next = targetNode
      insertNode.prev = prevTargetNode // NEW
      targetNode.prev = insertNode // NEW
    }

    this._length += 1;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this._length) return false

    let delNode

    if (index === 0) {
      delNode = this._head
      this._head = this._head.next
      this._head.prev = null // NEW
    } else {
      const prevNode = this.getNode(index - 1)
      delNode = prevNode.next
      const nextNode = delNode.next
      // 若移除为最后一个元素
      if (!nextNode) {
        this._tail = prevNode
        this._tail.next = null // NEW
      } else {
        prevNode.next = nextNode // NEW
        nextNode.prev = prevNode;// NEW
      }
    }

    this._length -= 1
    return delNode.data
  }
}