
// 异步函数setTimeout/setInternal
var c =0;
function print () {
    console.log(c);
}

function plus () {
    setTimeout(function () {
        c+=1;
    },20)
}

plus(print);