var app = require('express')();
var cors = require('cors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

var TEXT_FILE = path.join(__dirname, 'teleprompter_data.json');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/remote.html');
});

/* GET saved text */
app.get('/api/text', function(req, res) {
  try {
    if (fs.existsSync(TEXT_FILE)) {
      var data = JSON.parse(fs.readFileSync(TEXT_FILE, 'utf8'));
      res.json(data);
    } else {
      res.json({ html: '', fontSize: 60 });
    }
  } catch(e) {
    res.json({ html: '', fontSize: 60 });
  }
});

/* POST / save text */
app.post('/api/text', function(req, res) {
  var data = {
    html: req.body.html || '',
    fontSize: req.body.fontSize || 60,
    updatedAt: Date.now()
  };
  try {
    fs.writeFileSync(TEXT_FILE, JSON.stringify(data), 'utf8');
  } catch(e) {}
  res.json({ success: true });
});

io.on('connection', function(socket) {
  socket.on('connectToRemote', function(id) {
    socket.room = id;
    socket.join(id);
    socket.emit('connectedToRemote', id);
    socket.broadcast.to(id).emit('connectedToRemote', id);
  });

  socket.on('sendRemoteControl', function(command, value) {
    socket.emit('remoteControl', command, value);
    socket.broadcast.to(socket.room).emit('remoteControl', command, value);
  });

  socket.on('clientCommand', function(command, value) {
    socket.emit('clientCommand', command, value);
    socket.broadcast.to(socket.room).emit('clientCommand', command, value);
  });
});

http.listen(3000, function() {});
