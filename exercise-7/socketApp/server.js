const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);
const port = 3000;

function log(message) {
    console.log(message);
  }

io.on('connection', (socket) => {
    log('connected')
    

    socket.on("message", (event) => {
        console.log("New message from one of the client: ", event);
        socket.broadcast.emit("message", event);
      });

      socket.on("disconnect", (event) => {
        console.log("A client disconnected");
        socket.broadcast.emit("message", "A client disconnected");
      });
})

server.listen(port, () => log(`server listening on port: ${port}`))
