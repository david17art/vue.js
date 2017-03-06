var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
	res.sendfile('./index.html');
})
app.get("/notas",function(req,res){
	res.sendfile('./notas.html');
})

app.listen('3000',function(){
	console.log("Server corriendo puerto 3000")
})