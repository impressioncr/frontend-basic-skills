function newOperator(ctor) {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function'
  }
  newOperator.target = ctor
  let newObj = Object.create(ctor.prototype)
  let argsArr = [].slice.call(arguments, 1)
  let ctorReturnResult = ctor.apply(newObj, argsArr)
  let isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null
  let isFunction = typeof ctorReturnResult === 'function'
  if (isObject || isFunction) {
    return ctorReturnResult
  }
  return newObj
}