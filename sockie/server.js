const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 }); 
wss.on('connection', function connection(ws) { 
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
ws.on('close', function close() {
    console.log('disconnected');
  });
ws.send('init message to client');
});