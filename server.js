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
    //listen for new user connections
    socket.on('join', (username) => {
        socket.broadcast.emit('servermessage', `${username} has entered`);
    });
    //listen for messages sent to server and emit message
    socket.on('sendmessage', ({message, username, date, id}) => {
        io.emit('chatmessage', {message, username, date, id});
    })

    //leave message
    socket.on('disconnect', () => {
        socket.broadcast.emit('servermessage', `user has left`)
    })
})

const PORT = process.env.PORT || 3000;
const host = '0.0.0.0';

server.listen(PORT, host, () => {
    console.log(`server running on port ${PORT}`);
});