const express = require('express'); 
const router = express.Router(); 
 var path = require('path');
 var url=  require('url');
 const fs = require('fs');

 const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';


/* GET api listing. */ 
// router.get('/', (req, res) => { 
//   res.send('api works'); 
// }); 


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








router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
   tryJson = getConfig('../Json/tryJson.json');
  res.send(tryJson);
});

router.get('/tryJson', function (req, res, next) {
  //  modelsData = json[0].modelsData;

  tryJson = getConfig('../Json/tryJson.json');
  res.send(tryJson);
});



module.exports = router;