const webSocket = require('ws');

const wss = new webSocket.Server({port:8080});

wss.on('connection', ws => {
  ws.on('message', msg => {
    console.log(`Receive msg => ${msg}`)
  })
  ws.send(`Say hi from server :)`)
})
