var gulp        = require("gulp");
var shell       = require('gulp-shell');
// var clean       = require('gulp-clean');
// var runSequence = require('run-sequence');
// var fs          = require('fs');


// what goes where?
var buildSrc = "src";
var buildDest = "dist";
var localCache = "cache";
var prodCache = " /opt/build/cache/";
var cache;

// automatically set the correct path for our cache manipulations
if(process.env.URL) {
  cache = prodCache;
} else {
  cache = localCache;
}


// put the dcs files into the cache and dist folder
gulp.task("generate:docs", function () {

  console.log(`STASH DOCS ASSETS AT ${cache}/docs`);

  gulp.src(buildSrc + "/docs/**/*")
    .pipe(gulp.dest(buildDest + "/docs"))
    .pipe(gulp.dest(cache + "/docs"))
});


// get the dios files from the cache folder
gulp.task("get:docs", function () {

  console.log(`GET DOCS ASSETS FROM ${cache}/docs`);

  gulp.src(cache + "/docs/**/*")
    .pipe(gulp.dest(buildDest + "/docs"));
});



gulp.task('list', shell.task(`tree ${cache}`));
