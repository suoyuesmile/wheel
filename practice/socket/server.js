const http = require('http');
const { createHash } = require('crypto');
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
});

server.on('upgrade', (req, socket, head) => {
    const key =
    req.headers['sec-websocket-key'] !== undefined
    ? req.headers['sec-websocket-key'].trim()
    : false;
    
    const digest = createHash('sha1')
        .update(key + GUID)
        .digest('base64');



    const headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Accept: ${digest}`
    ];
    socket.write(headers.concat('\r\n').join('\r\n'));
    socket.on('data', (msg) => {
        console.log(encodeSocketFrame(msg));
    }) 
});

server.listen(3000);

// http://nodejs.cn/api/http.html#http_request_socket