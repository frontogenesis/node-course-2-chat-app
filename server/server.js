const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'ray@ray.com',
        text: 'This is a test',
        createAt: 123456
    });

    socket.emit('newMessage', {
        message: 'here is the message',
        createdAt: 35954
    });

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });

    socket.on('disconnect', (socket) => {
        console.log('Client disconnected');
    })
});

// app.get('/', (req, res) => {
//     res.render('index.html');
// });

server.listen(port, () => console.log(`Server is running on ${port}`));