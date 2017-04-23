let page = require('page');
let template = require('./template');

page('/signup', (context, next) => {
  // Setteamos el título:
    // $('title').html('signup');

  // Setteamos el título manualmente con document:
  document.title = "Signup";

  // Instancia del contenedor principal:
  let main = $('#main-container');

  // No usé la librería empty-element
  main.html(template);
});
