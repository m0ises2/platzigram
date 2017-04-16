var express = require('express');
var app = express();


app.get('/', (req, res) => {
  res.status(200).send('Hola Mundo');
});

app.listen(3000, (err) => {
  if (err) return console.log('Hubo error'), process.exit(1);

  console.log('platzigram escuchando en el puerto 3000');
})
