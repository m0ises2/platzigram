let yo = require('yo-yo');
let landing = require('../landing');

let signInForm = yo`<div class="col s12 m7">
      <div class="row">
        <div class="signup-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form" method="POST">
            <div class="section">
              <a class="btn btn-fb hide-on-small-only" >Iniciar sesión con Facebook</a>
              <a class="btn btn-fb hide-on-med-and-up" > <i class="fa fa-facebook-official" aria-hidden="true"></i> Iniciar sesión</a>
              <div class="divider"></div>
              <div class="section">
                <input type="text" name="username" placeholder="Nombre de usuario" />
                <input type="password" name="password" placeholder="Contraseña" />
                <button class="btn btn-signup waves-effect waves-light" type="submit">Iniciar Sesión</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="login-box">
          ¿No posees una cuenta? <a href="/signup">Regístrate</a>
        </div>
      </div>`;

module.exports = landing(signInForm);
