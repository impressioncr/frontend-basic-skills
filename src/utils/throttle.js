//fn 要执行的函数
//delay 延迟
//atleast  在time时间内必须执行一次
function throttle(fn, delay, atleast) {
  let timeout = null,
    startTime = new Date()
  return function () {
    let curTime = new Date()
    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= atleast) {
      fn()
      startTime = curTime
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = setTimeout(fn, delay)
    }
  }
}

// 实际想绑定在 scroll 事件上的 handler
function lazyload(event) {
  console.log('触发了')
}
