var xhr = new XMLHttpRequest() // 声明一个请求对象

// 前端设置是否带cookie
xhr.withCredentials = true

xhr.open('GET', 'xxxx')
//xhr.open('post', 'http://www.domain2.com:8080/login', true)

// 如何设置请求头? xhr.setRequestHeader(header, value)
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // readyState 4 代表已向服务器发送请求
    if (xhr.status === 200) { // status 200 代表服务器返回成功
      console.log(xhr.responseText) // 这是返回的文本
    } else {
      console.log("Error: " + xhr.status) // 连接失败的时候抛出错误
    }
  }
}

xhr.send(null)
