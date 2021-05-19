const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function compileSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ cascade: false, grid: 'autoplace' }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

function keepWatching() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('css/scss/*.scss', compileSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

exports.watch = keepWatching;
