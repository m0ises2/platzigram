// Router:
let page = require('page');
// i18n
let moment = require('moment');

require('moment/locale/es');

moment.locale('es');

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
