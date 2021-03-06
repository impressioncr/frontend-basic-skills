/**
 * 二叉搜索树
 */
class BinaryTreeNode {
  constructor(data) {
    this.key = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    const newNode = new BinaryTreeNode(key)
    if (this.root !== null) {
      this.insertNode(this.root, newNode)
    } else {
      this.root = newNode
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // 中序遍历 递归
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  // 中序遍历 使用栈
  inOrderTraverseByStack(callback) {
    let root = this.root
    let res = []
    let stack = []
    while (ture) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      if (stack.length === 0) break
      let node = stack.pop()
      if (node !== null) {
        res.push(node.key)
        root = node.right
      }
    }
    callback(res)
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  find(key) {
    return this.findNode(this.root, key)
  }

  findNode(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      return this.findNode(node.left, key)
    }
    if (key > node.key) {
      return this.findNode(node.right, key)
    }
    return node
  }

  getMin() {
    const ret = this.getMinNode()
    return ret && ret.key
  }

  getMinNode(node = this.root) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
    }
    return node
  }

  getMax() {
    const ret = this.getMaxNode()
    return ret && ret.key
  }

  getMaxNode(node = this.root) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
    }
    return node
  }

  remove(key) {
    return this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) { // 目标key小于当前节点key，继续向左找
      node.left = this.removeNode(node.left, key)
      return node
    }
    if (key > node.key) { // 目标key小于当前节点key，继续向右找
      node.right = this.removeNode(node.right, key)
      return node
    }
  
    // 找到目标位置
    if (node.left === null && node.right === null) { // 目标节点为叶节点
      node = null
      return node
    }
    if (node.right === null) { // 目标节点仅有左侧节点
      node = node.left
      return node
    }
    if (node.left === null) { // 目标节点仅有右侧节点
      node = node.right
      return node
    }
  
    // 目标节点有两个子节点
    const tempNode = this.getMinNode(node.right)// 右侧最小值
    node.key = tempNode.key
    node.right = this.removeNode(node.right, node.key)
    return node
  }
}