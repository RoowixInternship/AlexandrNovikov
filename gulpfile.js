const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');


gulp.task('minify', function () {
});

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('sass', function () {
    return gulp.src('app/stylesheet.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
});
