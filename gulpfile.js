// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Função para compilar o sass e adicionar os prefixos
function compileSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ cascade: false, grid: 'autoplace' }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Função para fazer o browser sync e continuar dando watch em arquivos css/html
function keepWatching() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('css/scss/*.scss', compileSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

// Exporta a função para ser chamada como gulp:watch
exports.watch = keepWatching;
