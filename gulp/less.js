// Name - Less-heavy
// Author - Austin Hodge
// description - Compiles, Minfies, Beautifies, and Autoprefixes Less with inline sourcemaps
// dependency Install - npm install -D gulp-less gulp-changed gulp-sourcemaps gulp-minify-css less-plugin-clean-css less-plugin-autoprefix
// Protip - Use for larger projects and Write modularly to reduce compile time! ;P

var gulp = require('gulp'),
    less = require('gulp-less'),
    changed = require('gulp-changed'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

var SRC = 'src/styles/main.less';
var DEST = 'dist/css';

module.exports = function () {
  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefix, cleancss] }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST));
}
