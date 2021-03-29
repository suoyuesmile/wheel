ETag / if-None-Match

1. 客户端请求服务器
2. 服务器产生ETag, 连同页面返回Etag， 保存Etag
3. 客户端再次请求， 服务器检查ETag, 返回403 和一个空的响应体

