var express = require('express');
var config = require('./config');

// Instancia del servidor Web creado por express:
var app = express();

// Template engine setup:
app.set('view engine', 'pug');

// Statics files:
app.use(express.static('public'));

// Routes:
app.get('/', (req, res) => {
  res.render('index',
  /*data que requiere el template clave:valor*/
  {});
});

app.get('/signup', (req, res) => {
  res.render('index',
  /*data que requiere el template clave:valor*/
  {});
});

app.get('/signin', (req, res) => {
  res.render('index',
  /*data que requiere el template clave:valor*/
  {});
});

// Ruta bypass para errores 404:
app.get('*', (req, res) => {
  // Aquí se deberia renderizar la vista de error 404 - Not Found
  res.status(404).send('Nope');
});

app.listen(config.port, (err) => {
  if (err) return console.log('Hubo error'), process.exit(1);

  console.log('platzigram escuchando en el puerto 3000');
})
