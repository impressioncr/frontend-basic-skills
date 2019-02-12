function Promise(fn) {
  let status = 'pending'

  function successNotify() {
    status = 'fulfilled' //状态变为fulfilled
    toDoThen.apply(undefined, arguments) //执行回调
  }

  function failNotify() {
    status = 'rejected' //状态变为rejected
    toDoThen.apply(undefined, arguments) //执行回调
  }

  function toDoThen() {
    setTimeout(() => { // 保证回调是异步执行的
      if (status === 'fulfilled') {
        for (let i = 0; i < successArray.length; i++) {
          successArray[i].apply(undefined, arguments) //执行then里面的回掉函数
        }
      } else if (status === 'rejected') {
        for (let i = 0; i < failArray.length; i++) {
          failArray[i].apply(undefined, arguments) //执行then里面的回掉函数
        }
      }
    })
  }
  let successArray = []
  let failArray = []
  fn.call(undefined, successNotify, failNotify)
  return {
    then: function (successFn, failFn) {
      successArray.push(successFn)
      failArray.push(failFn)
      return undefined // 此处应该返回一个Promise
    }
  }
}
