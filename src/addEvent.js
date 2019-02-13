let addEvent = function(ele, type, fn) {
  if (window.addEventListener) {
    addEvent = function(ele, type, fn) {
      ele.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function(ele, type, fn) {
      ele.attachEvent('on' + type, function() {
        fn.call(ele)
      })
    }
  }
  addEvent(ele, type, fn)
}
