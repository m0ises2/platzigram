let page = require('page');
let template = require('./template');

page('/', (context, next) => {
  // Instancia del contenedor principal:
  let main = $('#main-container');

  main.html(template);
});
