(self.webpackChunkwheel=self.webpackChunkwheel||[]).push([[573],{3643:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-77ee3265",path:"/http/cache.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"http/cache.md",git:{updatedTime:1617009968e3,contributors:[]}}},398:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});const n=(0,s(6252).uE)('<p>[Draft]</p><p>稳定的资源</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 设置缓存时间一年\nCache-Control: max-age = 31536000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>变动的资源</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 经过服务器检查\nCache-control: no-cache\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>经常修改的资源</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: must-revalidate, max-age=600\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>// 性能收益/节省服务器带宽 // 保证资源是最新的</p><p>// 强缓存 max-age &gt; expires 不发请求 // max-age: (HTTP1.1) 相对过期时间 // expires: 绝对过期时间（兼容）</p><p>// 强缓存 &gt; 协商缓存 Pragma: no-cache 使用协商缓存</p><p>// 协商缓存 响应304，空响应体 // 时间对比</p><p>If-Modified-Since(Req) Last-Modified(Res) 侦测时间为一秒</p><p>// 标识对比（更精确） If-None-Match(Req) ETag(Res)</p><p>Etag 生成 W/前缀代表使用弱类型验证 使用摘要算法 最后修改时间+内容长度 使用hash（大小+时间）并不完美</p>',14),t={render:function(e,a){return n}}}}]);