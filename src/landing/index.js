let yo = require('yo-yo');

/*
  El parámetro box es el HTML de lo que queremos incrustar
  en nuestra landing Page.
*/
module.exports = function landing( box ) {
  return yo`<div class="container">
              <div class="row">
                <div class="col s10 push-s1">
                  <div class="row">
                    <div class="col m5 hide-on-small-only">
                      <img src="motog.png" class="motog" />
                    </div>
                    ${box}
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
}
