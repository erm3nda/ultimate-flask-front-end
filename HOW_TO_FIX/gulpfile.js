// requirements

var gulp = require('gulp');
var gulpBrowser = require("gulp-browser");
var reactify = require('reactify');
var del = require('del');
var size = require('gulp-size');


// tasks

function transform () {
  var stream = gulp.src('./project/static/scripts/jsx/*.js')
    .pipe(gulpBrowser.browserify({transform: gulp.series(reactify)}))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(size());
  return stream;
};

function clean () {
  return del(['./project/static/scripts/js']);
};

function awatch () {
  return gulp.watch('./project/static/scripts/jsx/*.js', gulp.series(transform));
}

gulp.task('default', gulp.series(clean, transform), function () {
});

gulp.task('watch', gulp.series(awatch), function () {
});