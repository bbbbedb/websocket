//  Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var url = require('url');
const axios = require('axios');


var fs = require('fs');
// Get our API routes
const api = require('./server/routes/api');

const app = express();


function readJsonFileSync(filepath, encoding) {

  if (typeof (encoding) == 'undefined') {
    encoding = 'utf8';
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}


function getConfig(file) {
  var filepath = __dirname + '/' + file;
  // console.log(filepath);
  return readJsonFileSync(filepath);
}










app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'jade');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.render(path.join('index', { title: 'WDDS' }));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));










// IO

// FS取得檔案
var tryJson = getConfig('./server/Json/tryJson.json');
var newsJson = getConfig('./server/Json/newsJson.json');




let app1 = require('express')();
let http1 = require('http').Server(app);
let io = require('socket.io')(http1);



console.log(newsJson);



io.on('connection', (socket) => {
  console.log('user connected');
  // 使連入就送出 ，其餘所有socket.on 事件都在connection裡
  io.emit('message', tryJson);
  io.emit('news', newsJson);





// 使用者離線時
  socket.on('disconnect', function () {
    console.log('user disconnected');


  });




  socket.on('add-message', (message) => {
    // 將傳入值push進tryJson裡

    tryJson[0].text.push(message);

    let content = JSON.stringify(tryJson);

    fs.writeFile("./server/Json/tryJson.json", content, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file of tryJson was saved!");
    });



    io.emit('message', tryJson);

    console.log(tryJson);
  });






socket.on('add-News', (message) => {
    // 把傳入值push進newJson裡

    newsJson[0].news.push(message);

    let content = JSON.stringify(newsJson);

    fs.writeFile("./server/Json/newsJson.json", content, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file of news was saved!");
    });



    io.emit('message', tryJson);

    console.log(tryJson);
  });









});

http1.listen(5000, () => {
  console.log('started on port 5000');
});






