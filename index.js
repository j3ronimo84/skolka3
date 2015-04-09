var express = require('express');
var multer = require('multer');
var fp = require('./modules/file-parser');
var graph = require('./modules/graph');

var app = express()
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('./assets'));
app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/',function (req, res) {
  console.log("Form sended");
  var upfile = req.files.file;
  var data = req.body.data;
  var numbers = null;
  var test;
  if(upfile!=null){
      fp.getData(upfile, function(err, nums){
        if(err){
          console.log(err);         
        }else {
          numbers = nums;
          console.log("file => "+nums);
          test = nums;
          console.log("Test1: "+test); 
        }
      });
  }else if(data != null){
    fp.parseData(data, function(err, nums){
      if(err){
        console.log(err);         
      }else {
        numbers = nums;
        console.log("data => "+nums);
      }
    });
  }else {
    res.render('index', {err: "Must add file or write data!"});
  }
  console.log("Test2: "+test);   
  if(numbers){
      graph.generateSVG(numbers, function(err, svg){
        if(err){
          console.log(err);
        }else {
          //res.redirect('/graph', {svg: svg});
          res.render('graph', {svg: svg});
        }
      });
  }
  
  res.render('index');
});

//nacitani svg ze souboru -> zavislost fs
// app.get('/graph', function(req,res) {
//   res.render('graph', {fs: require('fs')});
// });


app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});