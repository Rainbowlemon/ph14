/* ----------------------
 * ------ REQUIRES ------
 * ----------------------
 */

// Shared
var gulp = require('gulp');
var gutil = require('gulp-util');

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

var logSassError = function(err){
  console.log('SASS error: ' + err);
}

gulp.task('sass', function(){
  return gulp.src(cssSrc)
    .pipe(sass())
    .on('error', logSassError)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      debug: true
    }, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssDest));
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
