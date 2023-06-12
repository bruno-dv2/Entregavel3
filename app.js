var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// Iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/subtracao', function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).send('Os valores enviados devem ser números.');
    return;
  }

  var resultado = num1 - num2;
  res.json('O resultado da subtração é: ' + resultado);
});