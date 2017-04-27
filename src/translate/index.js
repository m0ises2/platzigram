/*
  Esta condición es un polyfill para poder tener disponible Intl en el
  navegador safari.
*/
if ( !window.Intl ) {
  window.Intl = require('intl');
}

let IntlMessageFormat = require('intl-messageformat');
let IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

// Locales de idioma:
require('intl-relativeformat/dist/locale-data/es.js');
require('intl-relativeformat/dist/locale-data/en.js');

// Requerimos los archivos con las traducciones para los likes:
let es = require('./es');
let en_us = require('./en-us');

// Seteamos los mensajes en español e ingles:
let MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en_us;

// Idioma que maneja nuestro sitio:
let locale = localStorage.getItem('locale') || 'es';

// Creamos el message format:
module.exports = {
  message: function (text, options = {}) {
    let mf = new IntlMessageFormat(MESSAGES[locale][text], locale, /*format*/null);
    return mf.format(options);
  },
  date: new IntlRelativeFormat(locale)

}
