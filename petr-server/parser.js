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
			var numbers;	 	
			numbers = parser(data);			
			fs.unlink('./uploads/' + file.name, function(err){
			if(err) return cb(err);
			console.log("File deleted.");
			return cb(null, numbers);			
			});	

		});
		
	}else{
		if(body.text != null){
			console.log("Textarea accepted.");
			return cb(null, parser(body.text));
		}else{
			return cb("Empty submit.", null);
		}
	}
}
