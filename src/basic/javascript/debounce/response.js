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
        const demoPath = path.resolve(__dirname, 'debounce.html');
        const html = fs.readFileSync(demoPath);
        res.write(html);
        res.end();
    }
    
    if (req.url.match('/data')) {
        const query = req.url.split('?')[1];
        const searchParams = new URLSearchParams(query);
        console.log(searchParams);
        const countValue = searchParams.get('count');
        await wait(3000);
        res.write(`responce ok ${countValue}`);
        res.end();
    }
});

server.listen(3000)