let yo = require('yo-yo');
let translate = require('../translate');

let header = yo`<nav class="header">
                  <div class="nav-wrapper">
                    <div class="container">
                      <div class="row">
                        <div class="col s12 m6 offset-m1">
                          <a href="/" class="brand-logo platzigram"> Platzigram </a>
                        </div>
                        <div class="col s2 push-s10 m6 push-m10">
                          <a href="#!" class="dropdown-button btn btn-large btn-flat" data-activates="drop-user">
                            <i class="fa fa-user" aria-hidden="true"></i>
                          </a>
                          <ul id="drop-user" class="dropdown-content">
                            <li> <a href="#!"> ${ translate.message('logout') } </a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>`;

module.exports = function (context, next) {
  let container = $('#header-container').empty();

  // Incrustamos el header en la vista que devuelve el servidor:
  container.append(header);

  // Iterador para los middlewares:
  next();
}
