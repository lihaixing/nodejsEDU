var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapers(html){
    var $=cheerio.load(html);
    var chapters = $('.learnchaper');
    var courseData = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chaperTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle:chaperTitle,
            videos:[]
        };
        videos.each(function(){
            var video = $(this).find('.studyvideo');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title:videoTitle,
                id:id
            });
        });
        courseData.push(chapterData);
    });

    return courseData;
}

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end',function(){
        var courseData = filterChapers(html);
        console.log(courseData.length);
    });
}).on('error',function(err){
    console.log(err);
});