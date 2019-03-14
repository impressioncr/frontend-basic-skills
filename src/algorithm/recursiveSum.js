/**
 * @function 递归求和算法
 */
const recursiveSum = arr => {
  let [first, ...rest] = arr
  return rest.length >= 2 ? first + recursiveSum(rest) : first + rest[0]
}
