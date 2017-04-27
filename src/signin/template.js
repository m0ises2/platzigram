let yo = require('yo-yo');
let landing = require('../landing');
let translate = require('../translate');

let signInForm = yo`<div class="col s12 m7">
      <div class="row">
        <div class="signup-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form" method="POST">
            <div class="section">
              <a class="btn btn-fb hide-on-small-only" >${ translate.message('signup.facebook') }</a>
              <a class="btn btn-fb hide-on-med-and-up" > <i class="fa fa-facebook-official" aria-hidden="true"></i> ${ translate.message('signup.text') } </a>
              <div class="divider"></div>
              <div class="section">
                <input type="text" name="username" placeholder="${ translate.message('signup.username') }" />
                <input type="password" name="password" placeholder="${ translate.message('signup.password') }" />
                <button class="btn btn-signup waves-effect waves-light" type="submit"> ${ translate.message('signup.text') } </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="login-box">
          ${ translate.message('signin.not-have-acoount') } <a href="/signup"> ${ translate.message('signup.call-to-action') } </a>
        </div>
      </div>`;

module.exports = landing(signInForm);
