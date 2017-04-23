let page = require('page');
let template = require('./template');

page('/signin', (context, next) => {
  // Setteamos el título:
    // $('title').html('Sigin');

  // Setteamos el título manualmente con document:
  document.title = "Signin";

  // Instancia del contenedor principal:
  let main = $('#main-container');

  // No usé la librería empty-element
  main.html(template);
});
