<template><h1 id="简单实现一个-ajax"><a class="header-anchor" href="#简单实现一个-ajax">#</a> 简单实现一个 AJAX</h1>
<p><code>AJAX</code> 的全称为 <code>Asynchronous JavaScript + XML</code>， 最重要的要属 <code>XHR</code> (<code>XMLHttpRequest</code>)</p>
<p><code>XMLHttpRequest</code> 通过不刷新页面请求特定URL，获取数据。</p>
<p><strong>问题是怎么通过 <code>XMLHttpRequest</code> 去发送请求和拿到数据呢？</strong></p>
<div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/think.svg" />
</div>
<p>依据我们学习JavaScript内核，我们在在脑海里潜意识中形成一个答案：</p>
<p><strong>弄一个类，实例化然后初始化请求，发送，发送完了在监听响应</strong>。</p>
<p>立刻写出伪代码, 1、2、3、4</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
xhr<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
xhr<span class="token punctuation">.</span><span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>知道大概怎么做了, 来认识下这个 <code>XMLHttpRequest</code></p>
<h4 id="xmlhttprequest-是一个构造函数"><a class="header-anchor" href="#xmlhttprequest-是一个构造函数">#</a> <code>XMLHttpRequest()</code> 是一个构造函数</h4>
<p>对应第1步， 我们实例化这个它</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="看看几个常用属性"><a class="header-anchor" href="#看看几个常用属性">#</a> 看看几个常用属性</h4>
<ol>
<li><code>XMLHttpRequest.onreadystatechange</code> 状态码变化时触发事件（所有浏览器支持）</li>
</ol>
<blockquote>
<p>Event handlers can also be set with properties on non-element objects that generate events, like window, document, XMLHttpRequest, and others. For example, for the progress event on instances of XMLHttpRequest:</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>简而言之：这是一个不需要节点对象触发的事件监听。监听的是请求响应状态码的改变。由此控制请求中各个阶段的处理。</p>
<ol start="2">
<li><code>XMLHttpRequest.readyState</code> 请求的状态码</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>状态</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>0</code></td>
<td><code>UNSENT</code></td>
<td>代理被创建，但尚未调用 <code>open()</code> 方法。</td>
</tr>
<tr>
<td><code>1</code></td>
<td><code>OPENED</code></td>
<td><code>open()</code> 方法已经被调用。</td>
</tr>
<tr>
<td><code>2</code></td>
<td><code>HEADERS_RECEIVED</code></td>
<td><code>send()</code> 方法已经被调用，并且头部和状态已经可获得。</td>
</tr>
<tr>
<td><code>3</code></td>
<td><code>LOADING</code></td>
<td>下载中 <code>responseText</code> 属性已经包含部分数据。</td>
</tr>
<tr>
<td><code>4</code></td>
<td><code>DONE</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<p>显然大多数情况我们只需要 <code>readyState</code> 为 4 的状态</p>
<ol start="3">
<li><code>XMLHttpRequest.status</code> 响应状态码
返回标准的HTTP 状态码</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>状态</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>100–199</td>
<td>Informational responses</td>
<td>接受请求</td>
</tr>
<tr>
<td>200–299</td>
<td>Successful responses</td>
<td>成功响应</td>
</tr>
<tr>
<td>300–399</td>
<td>Redirects</td>
<td>重定向</td>
</tr>
<tr>
<td>400–499</td>
<td>Client errors</td>
<td>客户端错误</td>
</tr>
<tr>
<td>500–599</td>
<td>Server errors</td>
<td>服务端错误</td>
</tr>
</tbody>
</table>
<ol start="4">
<li><code>XMLHttpRequest.response</code> 这个是整个响应实体</li>
<li><code>XMLHttpRequest.responseText</code> 返回 <code>DOMString</code></li>
<li><code>XMLHttpRequest.timeout</code> 超时时间</li>
<li><code>XMLHttpRequest.upload</code> 上传进度</li>
</ol>
<h4 id="在看看常用方法"><a class="header-anchor" href="#在看看常用方法">#</a> 在看看常用方法</h4>
<ol>
<li><code>open()</code> 对应我们第二步初始化请求</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// method/url 是必须的</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> async<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li><code>send()</code> 对应我们第四步发送请求</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// body 可选默认为null</span>
<span class="token comment">// 可以是 Blob, BufferSource (en-US), FormData, </span>
<span class="token comment">// URLSearchParams, 或者 USVString 对象.</span>
XMLHttpRequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li><code>setRequestHeader()</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>XMLHttpRequest<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>header<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 例如</span>
XMLHttpRequest<span class="token punctuation">.</span><span class="token function">setRequestHeader</span> <span class="token punctuation">(</span><span class="token string">"content-type"</span><span class="token punctuation">,</span>
<span class="token string">"application/x-www-form-urlencoded"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="使用上面api-重新实现"><a class="header-anchor" href="#使用上面api-重新实现">#</a> 使用上面API 重新实现</h4>
<ol>
<li>构造一个请求 <code>XMLHttpRequest</code></li>
<li>初始化一个请求 <code>open</code></li>
<li>监听请求 <code>onreadystatechange</code></li>
<li>发送该请求 <code>send</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://localhost:8000/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 4</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="完善下并封装成函数给调用"><a class="header-anchor" href="#完善下并封装成函数给调用">#</a> 完善下并封装成函数给调用</h4>
<p>封装的原理： <strong>隐藏实现的细节，暴露可变的api</strong></p>
<p>可变的数据： method、header, url、成功的处理，失败的处理。</p>
<p>所以大致封装成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> header<span class="token punctuation">,</span> success<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> header<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>methods<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div align="center">
    <img width="120" height="150" src="https://suoyuesmile.github.io/wheel/images/test.svg" />
</div>
#### 最后测试下请求的发送
```html
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
```js
// get 
ajax('http://localhost:8000', 'GET', () =&gt; {

}, () =&gt; {

})

// post
ajax('http://localhost:8000', 'POST', {}, () =&gt; {
    console.log('ok');
}, () =&gt; {
    console.log('error');
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="参考"><a class="header-anchor" href="#参考">#</a> 参考</h3>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers<OutboundLink/></a></p>
</template>