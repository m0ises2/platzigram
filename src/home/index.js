let page = require('page');
let template = require('./template');

page('/', (context, next) => {
  // Setteamos el título con Jquery:
    //$('title').html('Home');

  // Setteamos el título manualmente con document:
  document.title = "Home";

  // Instancia del contenedor principal:
  let main = $('#main-container');

  // Array que simula las fotografías de un usuario:
  let pictures = [
    {
      user: {
        username: 'm0ises2',
        avatar: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15727333_10210823481159662_8507986276484312547_n.jpg?oh=4280d29e73a4f5c2844629c791e7fc1f&oe=59819406'
      },
      url: 'office.jpg',
      likes: 135,
      liked: false,
      description: 'Mi oficina bella.',
      createdAt: new Date(2017, 0, 1)
    },
    {
      user: {
        username: 'm0ises2',
        avatar: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15727333_10210823481159662_8507986276484312547_n.jpg?oh=4280d29e73a4f5c2844629c791e7fc1f&oe=59819406'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true,
      description: 'Mi Home',
      createdAt: new Date(2017, 3, 21)
    }
  ];

  main.html(template(pictures));
});
