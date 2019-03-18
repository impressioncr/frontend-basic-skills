/**
 * @function 数组打乱顺序
 */
const disOrder = arr => {
  let len = arr.length
  let lenOrignal = len
  let newArr = []
  for (let i = 0; i < lenOrignal; i++) {
    let random = Math.floor(Math.random() * len)
    newArr.push(arr[random])
    arr.splice(random, 1)
    len -= 1
  }
  return newArr
}
