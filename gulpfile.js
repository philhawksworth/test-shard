var gulp        = require("gulp");
// var shell       = require('gulp-shell');
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


// Compile SCSS files to CSS
gulp.task("generate:docs", function () {

  console.log(`STASH DOCS ASSETS AT ${cache}`);

  gulp.src(buildSrc + "/docs/**/*")
    .pipe(gulp.dest(buildDest + "/docs"))
    .pipe(gulp.dest(cache + "/docs"))
});

gulp.task("get:docs", function () {

  console.log(`GET DOCS ASSETS FROM ${cache}`);

  gulp.src(cache + "/docs/**/*")
    .pipe(gulp.dest(buildDest + "/docs"))
});

