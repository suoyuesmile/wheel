const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });
    res.write('<h2>hello world</h2>');
    res.end();
});

server.listen(8000)