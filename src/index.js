// Router:
var page = require('page');

// Contenedor principal:
var main = document.getElementById('main-container');

// Routes
page('/', (context, next) => {
  main.innerHTML = 'Go to <a href="/signup" >Signup</a>'; // Home
});

page('/signup', (context, next) => {
  main.innerHTML = 'Go to <a href="/" >Home</a>'; // signup
});

// Invocando a page:
page.start(); // Equivale a llamar a page();
