// Name - Javascript-light
// Author - Austin Hodge
// description - Concatinates & Minfies Javascript
// dependency Install - npm install -D gulp-concat gulp-changed gulp-uglify


var gulp = require('gulp'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var SRC = [
    './src/app/angular/angular.js',
    './src/app/angular/highcharts.js',
    './src/app/angular/highcharts-ng.js',
    './src/app/core/app.js'    
],
    DEST = 'dist/js/';

module.exports = function() {
    return gulp.src(SRC)
        .pipe(changed(DEST))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(DEST));
}
