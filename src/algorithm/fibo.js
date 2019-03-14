/**
 * @description 斐波那契数列
 */
const fibo_memo = (function () {
  const temp = {
    0: 0,
    1: 1
  }
  return function fib(n) {
    if (!(n in temp)) {
      temp[n] = fib(n - 1) + fib(n - 2)
    }
    return temp[n]
  }
})()

const fibo_dp = n => {
  let current = 0
  let next = 1
  for(let i = 0; i < n; i++) {
    [current, next] = [next, current + next]
  }
  return current
}
