const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const run = require('run-sequence');

gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('build'))
});

gulp.task('sass', function () {
    return gulp.src('app/styles.css')
        .pipe(sass())
        .pipe(gulp.dest('build'))
});
