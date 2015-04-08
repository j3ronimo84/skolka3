var fs = require('fs');
module.exports = function (body, file, cb){
	var parser = function(data){
		var str = data.trim();
		str = str.replace(/ /g,'');
		return str.split(/\n|\r\n|;\Z*/);		
	}
	if(file!=null){
		console.log("File uploaded.");
		fs.readFile('./uploads/' + file.name, 'utf8', function(err, data){
			if(err) return cb(err);			 	
			return cb(null, parser(data));
		});
	}else{
		if(body.text != null){
			return cb(null, parser(body.text));
		}else{
			return cb("Empty submit.", null);
		}
	}
}
