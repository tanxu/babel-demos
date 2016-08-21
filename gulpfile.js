var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    // 此时的babel()是因为有了.babelrc才可以这样刚写
    // 如果没有.babelrc的话就要 babel({{"presets": ["es2015","react"],"plugins": ["transform-runtime]}})
    .pipe(gulp.dest('build'))
});

gulp.task('default', ["babel"]);