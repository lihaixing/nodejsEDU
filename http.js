// 1. HTTP服务器

// 要开发HTTP服务器程序，从头处理TCP连接，解析HTTP是不现实的。

// 这些工作实际上已经由Node.js自带的http模块完成了。
// 应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。

// request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
// response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

// 用Node.js实现一个HTTP服务器程序非常简单。
// 我们来实现一个最简单的Web程序hello.js，它对于所有请求，都返回Hello world!：

'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world! good</h1>');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');



// 2.文件服务器

// 让我们继续扩展一下上面的Web程序。

// 我们可以设定一个目录，然后让Web程序变成一个文件服务器。
// 要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。

// 解析URL需要用到Node.js提供的url模块，它使用起来非常简单，
// 通过parse()将一个字符串解析为一个Url对象：

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// 3. 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'

// 使用path模块可以正确处理操作系统相关的文件路径。
// 在Windows系统下，返回的路径类似于C:\Users\michael\static\index.html，这样，我们就不关心怎么拼接路径了