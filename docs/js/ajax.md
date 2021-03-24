# 简单实现一个 AJAX


 `AJAX` 的全称为 `Asynchronous JavaScript + XML`， 最重要的要属 `XHR` (`XMLHttpRequest`)

 `XMLHttpRequest` 通过不刷新页面请求特定URL，获取数据。
 
 **问题是怎么通过 `XMLHttpRequest` 去发送请求和拿到数据呢？**
<div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/think.svg" />
</div>

 依据我们学习JavaScript内核，我们在在脑海里潜意识中形成一个答案：
 
 **弄一个类，实例化然后初始化请求，发送，发送完了在监听响应**。

立刻写出伪代码, 1、2、3、4

```js
var xhr = new Request(); // 1
xhr.init(); // 2
xhr.send(); // 3
xhr.listener(); // 4
```
知道大概怎么做了, 来认识下这个 `XMLHttpRequest`

#### `XMLHttpRequest()` 是一个构造函数

对应第1步， 我们实例化这个它

```js
var request = new XMLHttpRequest();
```

#### 看看几个常用属性
1. `XMLHttpRequest.onreadystatechange` 状态码变化时触发事件（所有浏览器支持）

> Event handlers can also be set with properties on non-element objects that generate events, like window, document, XMLHttpRequest, and others. For example, for the progress event on instances of XMLHttpRequest:
```js
const xhr = new XMLHttpRequest();
xhr.onprogress = function() { … };
```
简而言之：这是一个不需要节点对象触发的事件监听。监听的是请求响应状态码的改变。由此控制请求中各个阶段的处理。

2. `XMLHttpRequest.readyState` 请求的状态码

| 值 | 状态 | 描述 |
| --- | --- | --- |
| `0`	| `UNSENT`	| 代理被创建，但尚未调用 `open()` 方法。|
| `1`	| `OPENED`|	`open()` 方法已经被调用。
|`2`|	`HEADERS_RECEIVED`	|`send()` 方法已经被调用，并且头部和状态已经可获得。|
|`3`|	`LOADING`|	下载中 `responseText` 属性已经包含部分数据。|
|`4`|	`DONE`	| - |

显然大多数情况我们只需要 `readyState` 为 4 的状态

3. `XMLHttpRequest.status` 响应状态码
返回标准的HTTP 状态码

| 值 | 状态 | 描述 |
| --- | --- | --- |
|100–199|Informational responses| 接受请求 |
|200–299|Successful responses|成功响应| 
|300–399|Redirects|重定向| 
|400–499|Client errors |客户端错误|
|500–599|Server errors|服务端错误| 
4. `XMLHttpRequest.response` 这个是整个响应实体
5. `XMLHttpRequest.responseText` 返回 `DOMString`
3. `XMLHttpRequest.timeout` 超时时间
3. `XMLHttpRequest.upload` 上传进度

#### 在看看常用方法
1. `open()` 对应我们第二步初始化请求
```js
// method/url 是必须的
xhr.open(method, url, async, user, password);
```
2. `send()` 对应我们第四步发送请求
```js
// body 可选默认为null
// 可以是 Blob, BufferSource (en-US), FormData, 
// URLSearchParams, 或者 USVString 对象.
XMLHttpRequest.send(body);
```
3. `setRequestHeader()`
```js
XMLHttpRequest.setRequestHeader(header, value);

// 例如
XMLHttpRequest.setRequestHeader ("content-type",
"application/x-www-form-urlencoded" );
```

#### 使用上面API 重新实现
1. 构造一个请求 `XMLHttpRequest`
2. 初始化一个请求 `open`
3. 监听请求 `onreadystatechange`
4. 发送该请求 `send`

```js
// 1
var xhr = new XMLHttpRequest();
// 2
xhr.open('GET', 'http://localhost:8000/data');
// 3
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response)
        } else {
            console.log('error');
        }
    }
}
// 4
xhr.send();
```

#### 完善下并封装成函数给调用
封装的原理： **隐藏实现的细节，暴露可变的api**

可变的数据： method、header, url、成功的处理，失败的处理。

所以大致封装成
```js
function ajax(url, method, header, success, error) {
    var request = new XMLHttpRequest();
    for (var key in header) {
        request.setRequestHeader(key, header[key]);
    }
    request.open(methods, url);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                success(request.response)
            } else {
                error();
            }
        }
    }
}
```
<div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/test.svg" />
</div>
#### 最后测试下请求的发送
```html

```

```js
// get 
ajax('http://localhost:8000', 'GET', () => {

}, () => {

})

// post
ajax('http://localhost:8000', 'POST', {}, () => {
    console.log('ok');
}, () => {
    console.log('error');
})
```

### 参考
[https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)