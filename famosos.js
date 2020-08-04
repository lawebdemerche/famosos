var express = ("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})


app.post("/,"funcion)(req,res){
  res.setHeader("Content-Type","text/html;charset=utf-8");
  /* Recogemos los valores del formulario*/
  var precio = Number(req.body.precio);
  var cantidad = Number(req.body.cantidad);
console.log(p);
console.log(c);
  var importeTotal = p*c;
  res.send("<h1> El importe total de tu compra sería: "+importeTotal+ "<h1>");

})

app.listen(3000,funcion(){
  console.log("Yuju servivdor funcionando")
})
