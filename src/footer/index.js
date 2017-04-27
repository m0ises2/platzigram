let yo = require('yo-yo');
let translate = require('../translate');

let elem = yo`<footer class="side-footer">
      <div class="container">
        <div class="row">
          <div class="col s12 l3 center-align">
            <a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat"> ${ translate.message('language') } </a>
            <!-- Dropdown Structure-->
            <ul id="dropdown1" class="dropdown-content">
              <li><a href="" onclick=${selectedLanguage.bind(null, 'en-US')} >${ translate.message('english') }</a></li>
              <li><a href="" onclick=${selectedLanguage.bind(null, 'es')} >${ translate.message('spanish') }</a></li>
            </ul>
          </div>
          <div class="col s12 l3 push-l6 center-align">® 2017 Platzigram  <a href="https://github.com/m0ises2/platzigram" target="_blank">m0ises2</a></div>
        </div>
      </div>
    </footer>`;

// Le incrustamos al body, el footer:
$('body').append(elem);

function selectedLanguage (lan) {
  // Seteamos el locale:
  localStorage.setItem('locale', lan);
  // Recargamos la página:
  location.reload();
}
