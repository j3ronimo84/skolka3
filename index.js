var express = require('express');
var multer = require('multer');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', './views');

app.use(multer({ dest: './uploads/'}))

app.get('/', function (req, res) {
        res.render('index');
});

app.post('/graph', function (req, res) {
        var text;

        if (req.files.textFile == undefined) {
                text = req.body.text;
        } else {
                text = fs.readFileSync(req.files.textFile.path, encoding='utf8');
        }
        var arr = parse(text);
	var max = getMaxOfArray(arr);

	var len = 1
	for (var i = 0; i < max.toString().length-1; i++)
		len *= 10
        
	res.render('graph', {numbers: arr, length: len });
});

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function parse(text) {
        text = text.replace(/\n/g, ';');
        text = text.replace(/\s/g, '')
        return text.split(";");
} 

app.listen(8080, function () {
        var addr = this.address();
        console.log("Server listening on http://%s:%s", addr.address, addr.port);
});

