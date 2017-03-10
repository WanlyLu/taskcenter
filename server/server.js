const http = require('http')
const url = require('url')

const server = http.createServer()

server.on('request', (request, response) => {
  let users = [{
    userName: 'luwanli',
    password: '12345678'
  }]
  let urlObj = url.parse(request.url, true).query
  let userName = urlObj.userName || ""
  let result = 0
  response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'}) // 设置响应头信息
  users.forEach(item => {
    if (item.userName === userName) {
      result = -1
      return
    }
  })
  response.end('' + result)
})
server.listen(5000, '127.0.0.1', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server running at http://127.0.0.1:5000')
  }
})

