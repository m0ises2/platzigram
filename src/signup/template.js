let yo = require('yo-yo');

module.exports = yo`<div class="container">
            <div class="row">
              <div class="col s10 push-s1">
                <div class="row">
                  <div class="col m5 hide-on-small-only">
                    <img src="motog.png" class="motog" />
                  </div>
                  <div class="col s12 m7">
                    <div class="row">
                      <div class="signup-box">
                        <h1 class="platzigram">Platzigram</h1>
                        <form class="signup-form" method="POST">
                          <h2>Registrate para compartir tus fotos</h2>
                          <div class="section">
                            <a class="btn btn-fb hide-on-small-only" >Iniciar sesión con Facebook</a>
                            <a class="btn btn-fb hide-on-med-and-up" >Iniciar sesión</a>
                            <div class="divider"></div>
                            <div class="section">
                              <input type="email" name="email" placeholder="Correo Electrónico" />
                              <input type="text" name="name" placeholder="Nombre Completo" />
                              <input type="text" name="username" placeholder="Nombre de usuario" />
                              <input type="password" name="password" placeholder="Contraseña" />
                              <button class="btn btn-signup waves-effect waves-light" type="submit">Registrar</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="row">
                      <div class="login-box">
                        ¿Posees ya una cuenta? <a href="/signin">Entrar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;