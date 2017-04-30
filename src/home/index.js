let page = require('page');
let template = require('./template');
// Middleware para mostrar el header:
let headerMiddleware = require('../header');
let agent = require('superagent');
let axios = require('axios');

page('/', /*Middlewares: */headerMiddleware, asyncloadPictures, /*Callback: */(context, next) => {
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

// Middleware:
function loadPicturesAxios(context, next) {
  axios
    .get('/api/pictures')
    .then( (response) => {
        if(response.status !== 200 ) return console.log(`Error ${response.statusText}`);

        context.pictures = response.data;
        next();
    } )
    .catch( err => console.log(err) );
}

// Middleware:
function loadPicturesFetch(context, next) {
  fetch('/api/pictures')
    .then( (response) =>  response.json()  )
    .then( data =>  {
      context.pictures = data;

      next();
     })
    .catch( err => console.log(err) );
}

// Middleware con async-await:
async function asyncloadPictures(context, next) {
  try {
    // await necesita que la función retorne una promesa, para así esperar por el resolve de esa promesa.
    context.pictures = await fetch('/api/pictures').then(res => res.json());

    /*
      Otra manera de hacer el mismo código:
      let response = await fetch('/api/pictures');
      let pictures = await response.json();
      context.pictures = pictures;
    */

    next();
  } catch(err) {
    console.log(err);
  }
}
