# 简单实现 Vite 热更新

热更新（hmr）全称 `Hot Module Reload`，常常在构建工具里面出现。

在我们开发时候修改代码后页面会立即自动更新。这是怎么做到了的呢？

现在我们通过一行一行代码来，构建一个最简单的热更新。

**问题是我们怎么做到文件变动到页面自动响应更新呢？**

<div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/think.svg" />
</div>

首先我们把整个过程分成3步

**1. 监听文件变动**
**2. 读取文件内容**
**3. 通知浏览器更新页面**

写出伪代码 1、 2、3

```js
// server

fs.watch(file); // 1
send(fileContent); // 2
```

接下来选取方案。

#### 第一步：监听文件变动

我们知道 nodejs 里面有个`fs.watch` api。它可以监听文件变动。

```js
(fs.FSWatcher) fs.watch(filename[, options][, listener])
```

但是更加查看一些文档，[stackoverflow](https://stackoverflow.com/questions/10762630/nodejs-fs-watch-on-directory-only-fires-when-changed-by-editor-but-not-shell-or)

发现node原生的watch api，存在些许问题。 这个时候回去找些库来实现

#### 使用 chokidar 来实现文件的监听

```js
const chokidar = require('chokidar');
// One-liner for current directory
chokidar.watch('demo/chokidar').on('all', (event, path) => {
    console.log(path);
});
```
![image](https://pic2.zhimg.com/v2-944f5c643c03c3d62202bbf422ea31ed_r.jpg)
成功监听到了文件的变动，但是发现启动服务起后，就直接打印路径。
现在我们只想要文件变更时候触发事件。把代码改成这样 all 替换成 change
去掉 event 参数

```js
const chokidar = require('chokidar');
// One-liner for current directory
chokidar.watch('demo/chokidar').on('change', (path) => {
    console.log(path);
});
```
重启服务器
![image](https://pic1.zhimg.com/80/v2-16074827f2394a78c7e58c1dcce6c2b4_1440w.png)

现在监听文件变动没问题了。

#### 第二步：读取文件内容

这个比较简单，因为是在服务端直接读取文件，我们就直接用 nodejs 中的 fs.readFileSync, 来实现
```js
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

chokidar.watch('demo/ws-chokidar').on('change', (relativePath) => {
    const filePath = path.resolve(__dirname, '../../', relativePath);
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data, relativePath);
    
    ws.send(data);
});
```

由于监听到的path参数是相对路径，而readFileSync需要读取争取的文件路径
使用 path 进行库进行拼接。现在看看效果

![image](https://pic4.zhimg.com/80/v2-7ed8644e72bff68849899d054b675203_1440w.png)

当我们随意修改change.html 内容时，控制台输出我们的文件内容和路径

#### 第三步： 通知浏览器更新页面
我们知道通常通过 AJAX 走 http 协议只能客户端发请求到服务器，接受响应。
**怎么让服务器主动通知客户端更新了哪些文件了。**

很显然要用到 websocket。 虽然 websocket 在浏览器和node都有api 支持，但是解密 socket 数据还是挺麻烦。 这里我们需要用到 websocket 的库。

一种是 socket.io,一种是 ws。这里只用 ws 作为例子。

我们先写一个前端页面。简单构造一个 socket 发送和监听器。 
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>socket</title>
    </head>
    <body>
        <button class="button">发送</button>
        <h2>data:</h2>
        <div class="response-data"></div>

        <script>
            var oButtons = document.getElementsByClassName('button');
            var oResponseDatas = document.getElementsByClassName('response-data');
            var oResponseData = oResponseDatas.length && oResponseDatas[0];


            if (oButtons.length) {
                oButtons[0].addEventListener('click', onClick, false);
            }

            function onClick() {
                var socket = new WebSocket('ws://localhost:3000');

                socket.open = function() {
                    socket.send('123');
                }
                socket.onmessage = function(event) {
                    console.log(event.data);
                    oResponseData.innerHTML = event.data;
                }

                socket.onclose = function() {
                    console.log('close');
                }

            }
        </script>
    </body>
</html>
```
![image](https://pic3.zhimg.com/80/v2-a462f4d7de8ee6a085003fdf1c2599de_1440w.jpg)
然后我们使用ws给服务器端构建发送和接收器
```js
const chokidar = require('chokidar');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    chokidar.watch('demo/ws-chokidar').on('change', (relativePath) => {
        const filePath = path.resolve(__dirname, '../../', relativePath);
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data, relativePath);

        ws.send(data);
    });

});
```

<div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/test.svg" />
</div>

#### 测试下效果

首先启动 node 服务器。
然后点击页面发送按钮， 构建 socket 连接。

![image](https://pic4.zhimg.com/80/v2-26c4690e3bc392c77ed83cf8a9404bf7_1440w.jpg)
成功连接

改变change.html 里面的内容。先加一个按钮试试
```html
<button>这是一个按钮</button>
```
保存文件后，浏览器立即收到了消息，并更新了页面
![image](https://pic4.zhimg.com/80/v2-acc3a7dfa4f8f417031ffecbb58e08bf_1440w.jpg)
很快，啪的一下！！！ messge 里面收到了数据，页面也多出了一个按钮。

在change.html 加个稍微复杂点的html，看行不行
```html
<div style="height: 300px; width: 300px; border-radius: 50%; background: crimson;text-align: center; color:white;line-height: 300px;">这是一个球</div>
```
![image](https://pic1.zhimg.com/80/v2-9b1bec471a5db3e81bd32b7248a88b1c_1440w.jpg)
这次大意了没有闪。啪的一下，出来了一个大红球。右边 message 里面多了几个记录。

这次就算基本完成啦。当然正式项目中远没有这么简单。剩下的靠大家直接研究了。

#### 最后看看 vite 代码

对于模块化构建的项目来说，热更新更加复杂。其中涉及到依赖更新页面替换的问题。

我们看看 vite 是怎么做的。 截取这里部分代码。
```js
  const mods = moduleGraph.getModulesByFile(file)

  // check if any plugin wants to perform custom HMR handling
  const timestamp = Date.now()
  const hmrContext: HmrContext = {
    file,
    timestamp,
    modules: mods ? [...mods] : [],
    read: () => readModifiedFile(file),
    server
  }

  for (const plugin of config.plugins) {
    if (plugin.handleHotUpdate) {
      const filteredModules = await plugin.handleHotUpdate(hmrContext)
      if (filteredModules) {
        hmrContext.modules = filteredModules
      }
    }
  }

  if (!hmrContext.modules.length) {
    // html file cannot be hot updated
    if (file.endsWith('.html')) {
      config.logger.info(chalk.green(`page reload `) + chalk.dim(shortFile), {
        clear: true,
        timestamp: true
      })
      ws.send({
        type: 'full-reload',
        path: config.server.middlewareMode
          ? '*'
          : '/' + normalizePath(path.relative(config.root, file))
      })
    } else {
      // loaded but not in the module graph, probably not js
      debugHmr(`[no modules matched] ${chalk.dim(shortFile)}`)
    }
    return
  }

  updateModules(shortFile, hmrContext.modules, timestamp, server)
}
```
具体分析下次再聊～

**之后会有更多相关简单轮子的文章发布。希望持续关注前端轮子～**

