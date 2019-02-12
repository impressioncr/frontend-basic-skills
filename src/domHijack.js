// DOM劫持
function nodeToFragment (node) {
  let flag = document.createDocumentFragment()
  let child
  // 首先，所有表达式必然会返回一个值，赋值表达式亦不例外
  // 理解了上面这一点，就能理解 while (child = node.firstChild) 这种用法
  // 其次，appendChild 调用以后 child 会从原来 DOM 中移除
  // 所以，第二次循环时，node.firstChild 已经不再是之前的第一个子元素了
  while (child = node.firstChild) {
    flag.appendChild(child) // 将子节点劫持到文档片段中
  }
  return flag
}
