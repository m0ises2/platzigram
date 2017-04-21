let page = require('page');
let template = require('./template');

page('/signin', (context, next) => {
  // Instancia del contenedor principal:
  let main = $('#main-container');

  // No usé la librería empty-element
  main.html(template);
});
