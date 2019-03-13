// 判断变量类型
const getType = function (obj) {
  let class2type = {}
  "Boolean Number String Function Array Date RegExp Object Error".split(" ")
    .forEach(element => (class2type["[object " + element + "]"] = element.toLowerCase()))
  if (obj == null) {
    return obj + ""
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj
}
