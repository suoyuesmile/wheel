const http = require('http');

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}


const server = http.createServer(async (req, res) => {
    await wait(3000);
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });
    res.write('<h2>hello world</h2>');
    res.end();
});

server.listen(3000)