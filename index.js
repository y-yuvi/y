const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const letters = [];

io.on('connection', (socket) => {
  socket.emit('initialLetters', letters);

  socket.on('addLetter', (data) => {
    letters.push(data);
    io.emit('letterAdded', data);
  });
});
