// Router:
let page = require('page');

// Módulos nuestros:
/*
  Estos módulos no exportan nada,
  por eso no se les asigna a una variable.
*/
require('./home');
require('./signup');
require('./signin');

// Invocando a page:
page.start(); // Equivale a llamar a page();
