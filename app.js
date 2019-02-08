var express = require('express');
var app = express();
var path = require("path"); 
var find = require("./js/find");
const PORT = process.env.PORT || 3000

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var noticias = require('./data/noticias.json');

app.get('', function (req, res) {
    res.send('Hola Mundo!');
});
app.get('/noticias', function (req, res) {
    res.send('Esta api debe ser utilizada por POST');
});
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
  console.log('Example app listening on port ' + PORT);
});
