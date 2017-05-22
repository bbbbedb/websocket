// Get dependencies 
const express = require('express'); 
const path = require('path'); 
const http = require('http'); 
const bodyParser = require('body-parser'); 
var url = require('url');
var fs = require('fs');
var socket_io = require('socket.io');
// var io = require('socket.io');
// Get our API routes 
const api = require('./server/routes/api'); 
 
const app = express(); 

app.set('views', path.join(__dirname,'dist')); 
app.set('view engine','jade'); 

// Parsers for POST data 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
 
// Point static path to dist 
app.use(express.static(path.join(__dirname, 'dist'))); 
 
// Set our api routes 
app.use('/api', api); 
 
// Catch all other routes and return the index file 
// app.get('*', (req, res) => { 
//   res.sendFile(path.join(__dirname, 'dist/index.html')); 
// }); 

app.get('/', (req, res) => { 
  res.render(path.join('index', {title:'WDDS'})); 
}); 
/** 
 * Get port from environment and store in Express. 
 */ 
const port = process.env.PORT || '3000'; 
app.set('port', port); 
 
/** 
 * Create HTTP server. 
 */ 

// const server = http.createServer(app); 
 var server = require('http').createServer(app);
/** 
 * Listen on provided port, on all network interfaces. 
 */ 
server.listen(port, () => console.log(`API running on localhost:${port}`));




//  sock.io 

var io = require('socket.io').listen(server);






// io.on('connection',function(socket){});
// io.listen(3000);






// var io = socket_io.listen(server);



// io.sockets.on('connection', function(socket){

//     socket.emit('foo', { name: 'bar' }); // 發送資料
 
//     socket.on('baz', function(data){
//         console.log(data); // 接收資料
//     });
// });

// io.sockets.on('connection', function(socket){
//     socket.broadcast.emit('everyone will receive this', 'except you'); // 廣播
// });