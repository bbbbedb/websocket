const express = require('express'); 
const router = express.Router(); 
 var path = require('path');
/* GET api listing. */ 
// router.get('/', (req, res) => { 
//   res.send('api works'); 
// }); 


router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});
 
module.exports = router;