console.log(setInterval(graphPoints, 1000));

function graphPoints(){
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", "/api/getdata", true);
  oReq.send();
}

var reqListener = function() {
  document.getElementById('data').innerHTML = this.responseText;
  console.log(this.responseText);
}