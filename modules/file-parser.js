var fs = require('fs');
var exports = module.exports = {};

exports.getData = function (file, callback) {
  fs.readFile('./uploads/' + file.name, 'utf8', function(err, data){
    if(err) {
      return callback(err);
    }	
    exports.parseData(data, function(err, nums){
      if(err){
        return callback(err);
      }else {
        return callback(null, nums);
      }
    });
	});
}

exports.parseData = function (data, callback){
  var nums = data
    .trim() //remove whitespace
    .replace(/ /g,'') //replace space with nothing
    .split(/\n|\r\n|;|,/);
  return callback(null, nums);	
}