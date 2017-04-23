var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('*.css')
    .pipe(purify(['*.html']))
    .pipe(gulp.dest('./dist'));
});
