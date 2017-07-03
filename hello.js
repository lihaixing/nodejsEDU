'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

// 将函数greet作为模块输出泄露出去
module.exports = greet;