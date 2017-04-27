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

// Ruta para API:
app.get('/api/pictures', (req, res) => {
  // Array que simula las fotografías de un usuario:
  let pictures = [
    {
      user: {
        username: 'm0ises2',
        avatar: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15727333_10210823481159662_8507986276484312547_n.jpg?oh=4280d29e73a4f5c2844629c791e7fc1f&oe=59819406'
      },
      url: 'office.jpg',
      likes: 1,
      liked: false,
      description: 'Mi oficina bella.',
      createdAt: new Date(2017, 0, 1).getTime()
    },
    {
      user: {
        username: 'm0ises2',
        avatar: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15727333_10210823481159662_8507986276484312547_n.jpg?oh=4280d29e73a4f5c2844629c791e7fc1f&oe=59819406'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      description: 'Mi Home',
      createdAt: new Date(2017, 3, 21).getTime()
    }
  ];

  res.status(200).send(pictures);
});

// Ruta bypass para errores 404:
app.get('*', (req, res) => {
  // Aquí se deberia renderizar la vista de error 404 - Not Found
  res.status(404).send('Nope');
});

// Listener por defecto:
app.listen(config.port, (err) => {
  if (err) return console.log('Hubo error'), process.exit(1);

  console.log('platzigram escuchando en el puerto 3000');

})
