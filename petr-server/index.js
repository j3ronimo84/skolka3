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
	parser(req.body, req.files.file, function(err, numbers){
		if (err) {
			res.render('index');
			return console.error(err);
		}
		console.log("Numbers: "+numbers);
		res.render('index', {numbers: JSON.stringify(numbers)});
	});
	
});

app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
