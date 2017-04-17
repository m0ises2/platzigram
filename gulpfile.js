/*
  Este archivo contiene la configuración de GULP.
  Esta herramienta nos sirve para automatizar las tareas de compilación de sass,
  creación de directorio public, minificación de archivos JS, y un montón de cosas más.
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var preset = require('babel-preset-es2015');
var source = require('vinyl-source-stream');

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
  Esta tarea permite
*/
gulp.task('scripts', () => {
  browserify('./src/index.js')
    .transform(babelify, preset)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});


// Tarea por defecto.
gulp.task('default', ['styles', 'assets', 'scripts']);
