class Stack {
  constructor() {
    this._items = []
  }
  // 向栈内压入一个元素
  push (item) {
    this._items.push(item)
  }
  // 把栈顶元素弹出
  pop() {
    return this._items.pop()
  }
  // 返回栈顶元素
  peek() {
    return this._items[this._items.length - 1]
  }
  // 判断栈是否为空
  isEmpty() {
    return !this._items.length
  }
  // 栈元素个数
  size() {
    return this._items.length
  }
  // 清空栈
  clear() {
    this._items = []
  }
}

/**
 * @function 进制转换
 * @description 进制转换的本质：将目标值一次一次除以进制基数，得到的取整值为新目标值，记录下余数，直到目标值小于0，最后将余数逆序组合即可。利用栈，记录余数入栈，组合时出栈
 * @example console.log(baseConverter(100345, 2))
 */

const baseConverter = (delNumber, base) => {
  const stack = new Stack()
  let rem = null
  let ret = []
  // 十六进制中需要依次对应A~F
  const digits = '0123456789ABCDEF'

  while (delNumber > 0) {
    rem = Math.floor(delNumber % base)
    stack.push(rem);
    delNumber = Math.floor(delNumber / base)
  }

  while (!stack.isEmpty()) {
    ret.push(digits[stack.pop()])
  }

  return ret.join('')
}

/**
 * @function 逆波兰表达式计算
 * @description 逆波兰表达式，也叫后缀表达式，它将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式，例如(a+b)*(c+d)转换为a b + c d + *
 * @example console.log(clacExp(["4", "13", "5", "/", "+"])); // 6.6
 */

const clacExp = (exp) => {
  const stack = new Stack()
  const isOperator = str => ['+', '-', '*', '/'].includes(str)
  
  for (let i = 0; i < exp.length; i++) {
    const one = exp[i]
    if (isOperator(one)) {
      const operatNum1 = stack.pop()
      const operatNum2 = stack.pop()
      const expStr = `${operatNum2}${one}${operatNum1}`
      const res = eval(expStr)
      stack.push(res)
    } else {
      stack.push(one)
    }
  }
  return stack.peek()
}

/**
 * @class 利用普通栈实现一个有min方法的栈
 * @description 使用两个栈来存储数据，其中一个命名为dataStack，专门用来存储数据，另一个命名为minStack，专门用来存储栈里最小的数据。始终保持两个栈中的元素个数相同，压栈时判别压入的元素与minStack栈顶元素比较大小，如果比栈顶元素小，则直接入栈，否则复制栈顶元素入栈；弹出栈顶时，两者均弹出即可。这样minStack的栈顶元素始终为最小值。
 */

class MinStack {
  constructor() {
    this._dataStack = new Stack()
    this._minStack = new Stack()
  }

  push(item) {
    this._dataStack.push(item)
    // 为空或入栈元素小于栈顶元素，直接压入该元素
    if (this._minStack.isEmpty() || this._minStack.peek() > item) {
      this._minStack.push(item)
    } else {
      this._minStack.push(this._minStack.peek())
    }
  }

  pop() {
    this._dataStack.pop()
    return this._minStack.pop()
  }

  min() {
    return this._minStack.peek()
  }
}
