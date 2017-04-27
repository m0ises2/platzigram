let page = require('page');
let template = require('./template');
// Middleware para mostrar el header:
let headerMiddleware = require('../header');
let agent = require('superagent');

page('/', /*Middlewares: */headerMiddleware, loadPictures, /*Callback: */(context, next) => {
  // Setteamos el título con Jquery:
    //$('title').html('Home');

  // Setteamos el título manualmente con document:
  document.title = "Home";

  // Instancia del contenedor principal:
  let main = $('#main-container');

  main.html(template(context.pictures));
});

// Middleware:
function loadPictures(context, next) {
  agent
    .get('/api/pictures')
    .end((err, res) => {
      if (err) return console.log(err);

      context.pictures = res.body;
      console.log('holis', res.body);
      next();
    });
}
