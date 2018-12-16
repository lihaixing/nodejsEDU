const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const fs = require('fs')
const app = new Koa();
app.use(bodyParser());

const nunjucks = require('nunjucks');

nunjucks.configure('views', { autoescape: true });
function fun_resHtml(template, model) {
    return nunjucks.render(template, model)
}

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    console.log(JSON.stringify(ctx, null, '   '))
    ctx.response.body = fun_resHtml('hello.html', { _name: name })
});
router.get('/', async (ctx, next) => {
    var name = ctx.params.name;
    console.log(JSON.stringify(ctx, null, '   '))
    ctx.response.body = fun_resHtml('index.html', {})
});
router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    var resHtml
    if (name === 'koa' && password === '123456') {
        resHtml = fun_resHtml('hello.html', { _name: name })
    } else {
        resHtml = fun_resHtml('error.html', {})
    }
    ctx.response.body = resHtml
});

app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');