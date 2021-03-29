[Draft]


稳定的资源
```
// 设置缓存时间一年
Cache-Control: max-age = 31536000
```

变动的资源
```
// 经过服务器检查
Cache-control: no-cache
```

经常修改的资源
```
Cache-Control: must-revalidate, max-age=600
```

// 性能收益/节省服务器带宽
// 保证资源是最新的

// 强缓存 max-age > expires 不发请求
// max-age: (HTTP1.1) 相对过期时间
// expires: 绝对过期时间（兼容）

// 强缓存 > 协商缓存 Pragma: no-cache 使用协商缓存

// 协商缓存 响应304，空响应体
// 时间对比

If-Modified-Since(Req) Last-Modified(Res)  侦测时间为一秒

// 标识对比（更精确）
If-None-Match(Req) ETag(Res)


Etag 生成
W/前缀代表使用弱类型验证
使用摘要算法 最后修改时间+内容长度 使用hash（大小+时间）并不完美