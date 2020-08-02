var http = require('http'),
    socketIO = require('socket.io'),
    fs = require('fs'),
    server,
    io;

server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      res.writeHead(200);
      res.end(data);
    });
});

server.listen(3030);
io = socketIO(server);

io.on('connection', function (socket) {
  socket.emit('from-server', {
      greeting: 'Hello'
  });
  socket.on('from-client', function (message) {
    console.log(message);
    socket.broadcast.emit('from-client', {
      data: message
    });
  });

  socket.on('message', function (message) {
    console.log(message);
  });
});