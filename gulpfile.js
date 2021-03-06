/*
  Este archivo contiene la configuración de GULP.
  Esta herramienta nos sirve para automatizar las tareas de compilación de sass,
  creación de directorio public, minificación de archivos JS, y un montón de cosas más.
*/
let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let babelify = require('babelify');
let browserify = require('browserify');
let preset = require('babel-preset-es2015');
let source = require('vinyl-source-stream');
let watchify = require("watchify");

/*
  Esta tarea permite compilar el código scss (sass) y posicionarlo en la carpeta public
*/
gulp.task('styles', () => {
  gulp
    .src('index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public'));
});

/*
  Esta tarea me permite copiar todo lo que está en el directorio assets
  a un nuevo directorio llamado public.
*/
gulp.task('assets', () => {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('./public'));
});

/*
  Esta tarea permite transpilar todo el código JS escrito en EC6 a EC5
  y de esta manera el proyecto pueda correr en cualquier navegador.
  Usamos browserify para construir el bundle con todos los require incrustados
  luego, babelify para transpilar de EC6 y EC7 a EC5.

  Se crea un archivo app.js que contiene TODA la lógica del frontend del cliente:
*/
gulp.task('scripts', () => {
  browserify('./src/index.js')
    .transform(babelify, preset)
    .bundle()
    .on('error', function(error) { console.log(error); this.emit('end') })
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});

/*function compile(watch) {
  var bundle = watchify(browserify('./src/index.js'));

  function reBundle() {
    bundle
      .transform(babelify, preset)
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if (watch) {
    bundle.on('update', () => {
      console.log('--> Bundling...');
      reBundle();
    });
  }

  reBundle();
}*/

/*
  Tarea para build:
*/
gulp.task('build', () => {
  // se llama la primera vez, por eso no se le pasa true como argumento:
  return compile();
});

/*
  Tarea para Watch:
*/
gulp.task('watch', () => {
  return compile(true);
});

// Tarea por defecto.
gulp.task('default', ['styles', 'assets', 'scripts']);
