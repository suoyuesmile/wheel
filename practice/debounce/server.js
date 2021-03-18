const http = require('http');
const fs = require('fs');
const path = require('path');

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

const server = http.createServer(async(req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html; charset=utf-8'
        });
        const demoPath = path.resolve(__dirname, 'client.html');
        const html = fs.readFileSync(demoPath);
        res.write(html);
        res.end();
    }
    
    if (req.url.match('/data')) {
        const query = req.url.split('?')[1];
        const searchParams = new URLSearchParams(query);
        const countValue = searchParams.get('q');
        await wait(3000);
        res.write(`responce ok ${countValue}`);
        res.end();
    }
});

server.listen(3000)
console.log('http://localhost:3000')