var express = require('express');

var app = express()
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
	res.render('index', {message: 'sssssss'});
});

app.listen(8080, function () {
	var addr = this.address();
	console.log("Server listening on http://%s:%s", addr.address, addr.port);
});
