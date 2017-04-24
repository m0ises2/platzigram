let yo = require('yo-yo');
let layout = require('../layout');
let picture = require("../pictureCard");

module.exports = function(pictures) {
  let el = yo`<div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
          ${pictures.map((elem) => {
            return picture(elem);
          })}
        </div>
      </div>
    </div>`;

    return layout(el);
}
