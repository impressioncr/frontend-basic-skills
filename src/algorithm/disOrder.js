/**
 * @function 数组打乱顺序
 */
const disOrder = arr => {
  let len = arr.length
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * len)
    nArr.push(arr[random])
    arr.splice(random, 1)
    len -= 1
  }
  return newArr
}
