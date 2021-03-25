const chokidar = require('chokidar');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    chokidar.watch('demo/ws-chokidar').on('change', (relativePath) => {
        const filePath = path.resolve(__dirname, '../../', relativePath);
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data, relativePath);

        ws.send(data);
    });

});

