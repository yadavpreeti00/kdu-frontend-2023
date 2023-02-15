var socket = require('socket.io-client')('http://localhost:3000');
const readline = require('readline');
  
  socket.on('disconnect', function() {
      socket.disconnect()
  });


  socket.on('connect', () => {
      console.log('=== start chatting ===')
  })
  socket.on("message", (data) => {
  console.log("New message from server: ", data);
});

  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.setPrompt('> ');
  rl.prompt();
  
  rl.on('line', (cmd) => {
    socket.emit('message', cmd);
    rl.prompt();
  });