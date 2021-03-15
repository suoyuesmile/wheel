const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });
    const demoPath = path.resolve(__dirname, '../javascript/debounce', 'debounce.html');
    const html = fs.readFileSync(demoPath);
    res.write(html);
    res.end();
});

server.listen(3000)