// apply es3-shim
Function.prototype.myApply = function(context, arr) {
  var context = context || window
  context.fn = this
  var result
  if (!arr) {
    result =  context.fn()
  } else {
    var args = []
    for(var i = 0, len = arr.length; i < len; i++) {
        args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args +')')
  }
  delete context.fn
  return result
}

// 测试一下
var value = 2

var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.myApply(foo, 'kevin', 18)
bar.myApply(null)
