/**
 * @function 冒泡排序
 * @param {*} arr 
 */
const bubbleSort = arr => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}


/**
 * @function 选择排序
 * @param {*} arr 
 */
const selectSort = arr => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        const temp = arr[minIndex]
        arr[minIndex] = arr[j]
        arr[j] = temp
      }
    }
  }
}

/**
 * @function 插入排序
 * @param {*} arr 
 */
const insertSort = arr => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
}
