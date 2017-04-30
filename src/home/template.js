let yo = require('yo-yo');
let layout = require('../layout');
let picture = require("../pictureCard");
let translate = require('../translate').message;
let agent = require('superagent');

module.exports = function(pictures) {
  let el = yo`<div class="container timeline">
                <div class="row">
                  <div class="col s8 offset-s2 m4 offset-m7 l4 offset-l5">
                      <form onsubmit=${onSubmit} id="formUpload" enctype="multipart/form-data" class="formUpload">
                        <div id="fileName" class="fileUpload btn btn-flat red lighten-1">
                          <span>
                            <i class="fa fa-camera" aria-hidden="true"></i>
                          </span>
                          <input id="file" name="picture" type="file" class="upload" onchange=${onchange}/>
                        </div>
                        <button id="btnUpload" type="submit" class="btn btn-flat green darken-3 hide"> ${translate('upload')} </button>
                        <button id="btnCancel" type="button" class="btn btn-flat red accent-4 hide" onclick=${cancel}> <i class="fa fa-times" aria-hidden="true"></i> </button>
                      </form>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 m10 offset-m1 l6 offset-l3">
                    ${pictures.map((elem) => {
                      return picture(elem);
                    })}
                  </div>
                </div>
              </div>`;

    function toggleButtons() {
      $('#fileName').toggleClass('hide');
      $('#btnUpload').toggleClass('hide');
      $('#btnCancel').toggleClass('hide');
    }

    function cancel() {
      toggleButtons();

      // Reseteamos el formulario:
      $('#formUpload')[0].reset();

    }

    function onchange() {
      toggleButtons();
    }

    function onSubmit(oEvent) {
      // Para prevenir que por defecto el formulario haga el envío de la data en el evento onsubmit, debemos:
      oEvent.preventDefault();

      console.log('Holi');

      let data = new FormData(this);

      agent
        .post('/api/pictures')
        .send(data)
        .end( (err, res) => {
          cancel();
          // Manejo de errores:
          console.log(arguments);
        });
    }

    return layout(el);
}
