let page = require('page');
let template = require('./template');

page('/', (context, next) => {
  // Setteamos el título con Jquery:
    //$('title').html('Home');

  // Setteamos el título manualmente con document:
  document.title = "Home";

  // Instancia del contenedor principal:
  let main = $('#main-container');

  main.html(template);
});
