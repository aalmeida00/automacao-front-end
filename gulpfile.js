const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('css/'));
}

exports.sass = compileSass;
