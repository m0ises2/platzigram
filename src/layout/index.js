/*
  Este es el layout para usuarios loggeados en nuestra aplicación.
*/
let yo = require('yo-yo');


module.exports = function layout(content) {
  return yo`<div class="content">
              ${content}
            </div>`;
}
