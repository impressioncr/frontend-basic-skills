// debounce函数用来包裹我们的事件
function debounce(fn, delay) {
  // 持久化一个定时器 timer
  let timer = null
  return function () {
    // 如果事件被触发，清除 timer 并重新开始计时
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn()
    }, delay)
  }
}

// 实际想绑定在 scroll 事件上的 handler
function lazyload(event) {
  console.log('触发了')
}
// 采用了去抖函数
window.addEventListener('scroll', debounce(lazyload, 500))