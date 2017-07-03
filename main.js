'use strict';

// 引入hello模块:
var greet = require('./hello'); //注意目录不能写成 var greet = require('hello');

var s = 'Michael';

greet(s); // Hello, Michael!

// 如果我们想要在下一次事件响应中执行代码
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

//程序退出时执行
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

//判断JavaScript执行环境
console.log(typeof window);//undefined
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}

//Node.js内置的fs模块就是文件系统模块，负责读写文件。

// 异步读文件
// 当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。
var fs = require('fs');
fs.readFile('yibu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 读取二进制文件
//当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
//在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
//Buffer对象可以和String作转换
fs.readFile('shuai.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // 写二进制文件
        fs.writeFileSync('star.png', data);

        console.log(data);
        console.log(data.length + ' bytes');

        // Buffer -> String
        var text = data.toString('utf-8');
        // console.log(text);
        // String -> Buffer
        // var buf = new Buffer(text, 'utf-8');
        // console.log(buf);
    }
});

//同步读取文件：不接受回调函数
var data = fs.readFileSync('yibu.txt', 'utf-8');
console.log(data);
// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：
// try {
//     var data = fs.readFileSync('sample.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     // 出错了
// }


// 写文件
// 将数据写入文件是通过fs.writeFile()实现的：
// writeFile()的参数依次为文件名、数据和回调函数。
//如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。
//回调函数由于只关心成功与否，因此只需要一个err参数。
var data = 'Hello, Node.js';
fs.writeFile('yibu.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// 同步写文件
var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);

// stat
// 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('yibu.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log(stat);
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// stat()也有一个对应的同步函数statSync()
