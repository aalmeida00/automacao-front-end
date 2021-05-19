const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function compileSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ cascade: false, grid: 'autoplace' }))
    .pipe(gulp.dest('css/'));
}

exports.sass = compileSass;
