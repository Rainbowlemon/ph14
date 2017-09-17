/* ----------------------
 * ------ REQUIRES ------
 * ----------------------
 */

// Shared
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

// Sass
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');



/* -----------------------
 * ------ CONSTANTS ------
 * -----------------------
 */

const cssSrc =    './src/sass/**/*.scss';
const cssDest =   './dist/css/';
const sassOptions = {
  errLogToConsole: true
};



/* -----------------------
 * -------- TASKS --------
 * -----------------------
 */

gulp.task('sass', function(){
  return gulp.src(cssSrc)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      debug: true
    }, function(details) {
      gutil.log(gutil.colors.yellow('Minifying ' + details.name));
      gutil.log('Original size: ' + gutil.colors.green(details.stats.originalSize) + ', reduced size: ' + gutil.colors.green(details.stats.minifiedSize));
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssDest))
});



// --- TASK: watch ---
gulp.task('watch', function(){
  gulp.watch(cssSrc, ['sass']).on('change', function(e){
    gutil.log(gutil.colors.green('Sass file ' + e.path + ' was ' + e.type + '; recompiling css...'));
  });

  return gulp;
});


// --- TASK: default ---
gulp.task('default', ['sass']);
