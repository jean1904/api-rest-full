var express = require('express');
var app = express();
var path = require("path"); 
var find = require("./js/find");
const PORT = process.env.PORT || 5000

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var noticias = require('./data/noticias.json');


app.post('/noticias', function (req, res) {
    var busqueda = req.body.buscar;
    var response = [];
    if(busqueda) {
        busqueda = busqueda;
        
        response = find.filterIt(noticias,busqueda);
    }else {
        response = noticias;
    }
    res.send(response);
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
