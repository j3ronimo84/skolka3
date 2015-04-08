var express = require('express');
var multer = require('multer');
var parser = require('./parser');

var app = express()
app.set('view engine', 'jade');
app.set('views', './views');
app.use('/stylesheets', express.static(__dirname + '/static'));
app.use(multer({ dest: './uploads'}));
app.get('/', function (req, res, next) {
	res.render('index');
	next();
});

app.post('/', function (req, res) {
	var numbers;	
	parser(req.body, req.files.file, function(err, numbers){
		if (err) return console.error(err);
		this.numbers = numbers;
		console.log(numbers);
		res.render('index', {message: numbers});
	});
	
});

app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
