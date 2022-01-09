const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const socketio = require('socket.io');

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
});

//set static folder
app.use(express.static(path.resolve(__dirname, './client/build')));

//serve build folder to client
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

//socket
io.on('connection', (socket) => {
    //broadcast new users
    socket.broadcast.emit('message', 'A new user has connected');
    
    //leave message
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
    })
})

const PORT = 3000 || process.env.port;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});