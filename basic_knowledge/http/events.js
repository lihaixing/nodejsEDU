var EventEmitter=require('events').EventEmitter;
var life = new EventEmitter();
// addEventListener 最好不要超多10次

// life.setMaxListeners(2);
function water(who){
    console.log('给'+who+'倒水');
}
life.on('求安慰',water);
life.on('求安慰',function(who){
    console.log('给'+who+'做饭');
});
life.on('求安慰',function(who){
    console.log('给'+who+'洗衣服');
});

life.on('求溺爱',function(who){
    console.log('给'+who+'买衣服');
});
life.on('求溺爱',function(who){
    console.log('给'+who+'交工资');
});
//移除事件
console.log(life.listeners('求安慰').length);
life.removeListener('求安慰',water);
console.log(life.listeners('求安慰').length);

// 和life.listeners('求安慰').length同义
console.log(EventEmitter.listenerCount(life,'求安慰'));

// 移除全部
// life.removeAllListeners();
life.removeAllListeners('求安慰');

life.emit('求安慰','汉字');

// var confort=life.emit('求安慰','汉字');
var loved=life.emit('求溺爱','妹子');
// var played=life.emit('求玩坏','妹子和汉字');
// // 是否被监听过 true和false
// console.log(confort);
// console.log(loved);
// console.log(played);