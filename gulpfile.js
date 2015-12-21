// We have to require our dependencies
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// create a TASK to compile Jade to HTML using gulp-jade
gulp.task('html', function() {
   gulp.src(['./dev/**/*.jade'])
   .pipe($.jade({pretty: true, doctype: 'html'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./'));
});

// create a TASK to compile CoffeeScript to JavaScript using gulp-coffee
gulp.task('js', function() {
   gulp.src(['./dev/**/*.coffee'])
   .pipe($.coffee({bare: true}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./js/'));
});

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./dev/**/*.sass'])
   .pipe($.sass({style: 'expanded'}))
   .pipe(gulp.dest('./css/'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./dev/**/*.jade'], ['html']);
   gulp.watch(['./dev/**/*.coffee'], ['js']);
   gulp.watch(['./dev/**/*.sass'], ['css']);
});

// finally, create a TASK that will run all commands when typing "gulp"
// in Terminal

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {});
