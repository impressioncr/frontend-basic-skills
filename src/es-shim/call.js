// call es3-shim
Function.prototype.myCall = function(context) {
  var context = context || window
  context.fn = this
  var args = []
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args +')')
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

bar.myCall(foo, 'kevin', 18)
bar.myCall(null)
