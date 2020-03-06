const {src, dest, watch} = require('gulp'),
  mode = require('gulp-mode')(),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass');

sass.compiler = require('sass');

function css() {

  return src('scss/index.scss')

    .pipe(mode.development(sourcemaps.init()))

    .pipe(sass({
      outputStyle: (mode.development() ? 'expanded' : 'compressed')
    }).on('error', sass.logError))

    .pipe(autoprefixer())

    .pipe(rename('style.css'))

    .pipe(mode.development(sourcemaps.write('')))

    .pipe(dest('public/css'))

}

exports.watch = function() {
  
  watch('src/scss/**/*.scss', css);

}

exports.default = css;