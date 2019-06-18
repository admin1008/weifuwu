// 引入http模块，网络编程，处理http协议的
var http = require('http')
    // 创建web服务
http.createServer(function(request, response) {
    //request 请求
    // response响应
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    for (var i = 0; i < 5; i++) {
        response.write("Hello World<br/>")
    }
    response.end()
}).listen("8888")

console.log("server is running at http://localhost:8888")