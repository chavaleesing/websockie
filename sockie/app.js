var connection = new WebSocket('ws://localhost:4000')
connection.onopen = function () {
  console.log("connect webSocket");
  connection.send("Hello ABCDEF");
};
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};
connection.onmessage = function (e) {
  console.log("message from server: ", e.data);
};