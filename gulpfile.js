const gulp = require('gulp');
const stripDebug = require('gulp-strip-debug');
const minify = require('gulp-minify');
const JavaScriptObfuscator = require('gulp-javascript-obfuscator');
const replace = require('gulp-replace');
const prompt = require('gulp-prompt');
const print = require('gulp-print').default;
var strip = require('gulp-strip-comments');


gulp.task('js-cleanup', () =>
  gulp.src('./files/**/*.js')
    .pipe(prompt.confirm('please continue only if you want to refactor js files (Remove console logs - Apply obfuscation)?'))
    .pipe(print(filepath => `built: ${filepath}`))
    .pipe(stripDebug()) 
    .pipe(JavaScriptObfuscator())
    .pipe(gulp.dest('./files/'))
);

gulp.task('game-cleanup', () =>
  gulp.src('c:/AppServ/www/knife_ninja/**/*.js')
  .pipe(prompt.confirm('please continue only if you want to refactor games js files (Remove console logs - Apply obfuscation - rename some variable)?'))
  .pipe(print(filepath => `built: ${filepath}`))
    .pipe(stripDebug()) 
    .pipe(JavaScriptObfuscator())
    .pipe(strip())
    .pipe(replace('score', 'h123456'))
    .pipe(replace('Score', 'h123456'))
    .pipe(replace('game over', 'h223456'))
    .pipe(replace('game_over', 'h323456'))
    .pipe(replace('game start', 'h423456'))
    .pipe(replace('game_start', 'h523456'))
    .pipe(replace('Speed', 'h623456'))
    .pipe(gulp.dest('c:/AppServ/www/knife_ninja/'))
);
