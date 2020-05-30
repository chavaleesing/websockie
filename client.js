const WebSocket = require('ws')
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('msg from Client') 
}
 
connection.onerror = (error) => {
  console.log(`WebSocket connection error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}