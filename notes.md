bower:包管理工具
bower init
bower install bootstrap --save 保存到jsoN里
新建文件.bowerrc 配置包的目录 可以自动安装
npm config set registry http://registry.npm.taobao.org
https://registry.npmjs.org

npm init -y快速的
卸载 npm uninstall moment
npmrc

检查代码
eslint --rule

1.命令行模式和Node交互模式
	1> 看到类似C:\>是在Windows提供的命令行模式
	2> 看到>是在Node交互式环境下
	3> 在命令行模式下，可以执行node进入Node交互式环境，
	   也可以执行node hello.js运行一个.js文件
	4> 在Node交互式环境下，我们可以输入JavaScript代码并立刻执行。

2. node --use_strict calc.js 开启严格模式

3. 直接输入node进入交互模式，相当于启动了Node解释器，每输入一行就执 行一行。

   直接运行node hello.js文件相当于启动了Node解释器，然后一次性把hello.js文件的源代码给执行了，你是没有机会以交互的方式输入源代码的。

4. 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。

module.exports.foo = function () { return 'foo'; };
module.exports.bar = function () { return 'bar'; };

module.exports = function () { return 'foo'; };

5. process也是Node.js提供的一个对象，它代表当前Node.js进程。通过process对象可以拿到许多有用信息：
	> process === global.process;
	true
	> process.version;
	'v5.2.0'
	> process.platform;
	'darwin'
	> process.arch;
	'x64'
	> process.cwd(); //返回当前工作目录
	'/Users/michael'
	> process.chdir('/private/tmp'); // 切换当前工作目录
	undefined
	> process.cwd();
	'/private/tmp'
