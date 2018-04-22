var http=require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
    content:'一起期待下一期的课程吧',
    cid:348
});
var option={
    hostname:'www.imooc.com',
    port:80,
    path:'/course/documment',
    method:'POST',
    header:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'UM_distinctid=1617684d8370-0431d2362eb4f6-6b1b1279-100200-1617684d83a350; imooc_uuid=fdcc9d32-7a4d-4548-b7e4-f754ef672758; imooc_isnew_ct=1522252157; PHPSESSID=e68rcn4njcrjuk83g4fr2d6tu7; CNZZDATA1261110065=1315393585-1502380703-null%7C1524416846; loginstate=1; apsid=NhYzJlMjVkMTQ2NzA5YmEyMmRhZGYwMTdiZmU0YzUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjkxMTk1OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsaWhhaXhpbmdhYmNAMTI2LmNvbQAAAAAAAAAAAAAAAGI3NmM2ZTlkNzg1MDUxODUwY2U4MWUzZTNjYWZhZjBiCNDcWgjQ3Fo%3DMG; last_login_username=lihaixingabc%40126.com; mc_channel=L5; mc_marking=286b51b2a8e40915ea9023c821882e74; cninfo=L5-286b51b2a8e40915ea9023c821882e74; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1522252769,1524331408,1524408977,1524412481; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1524421507; cvde=5adcadb65ccb8-321; imooc_isnew=2',
        'Host':'www.imooc.com',
        'Origin':'https://www.imooc.com',
        'Referer':'https://www.imooc.com/qa/348/t/0',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function(res){
    console.log('Status:'+res.statusCode);
    console.log('headers:'+JSON.stringify(res.headers));
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end',function(){
        console.log('评论完毕！');
    });
});

req.on('error',function(){
    console.log('挂了');
});
req.write(postData);