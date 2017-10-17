// Include gulp
var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Take all js files and build them into one js file
gulp.task('scripts', function() {
    return gulp.src('./assets/js/*/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

//Take all js files and build them into one js file
gulp.task('tags', function() {
    return gulp.src('./assets/tags/*.tag')
        .pipe(concat('main.tags'))
        .pipe(gulp.dest('./assets/tags'));
});

//Take all less files and build them into one minified css file
gulp.task('less', function() {
    gulp.src('./assets/less/main.less')
    .pipe(less())
    .on('error', function (err) {
        gutil.log(err);
        this.emit('end');
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css'));
});

// Watch files for changes and auto run their task
gulp.task('watch', function () {
    gulp.watch('assets/less/**/*.less', ['less']);
    gulp.watch('assets/js/*/*.js', ['scripts']);
    gulp.watch('assets/tags/*.tag', ['tags']);
});

// Default Task
gulp.task('default', ['less', 'scripts', 'tags', 'watch']);