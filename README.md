npm install

================================
1-task for js files
a- Remove console logs
b- Apply obfuscation on them

npm run js-cleanup
================================

2-task for game js files
a- Remove console logs
b- Apply obfuscation on them
c- Easy variable search “game over/game start/score” and auto renames them
d- clear comments

npm run game-cleanup
==============================

edit gulpfile.js

you need first to edit (files) on below code to your folder src
gulp.src('./files/**/*.js')

you need first to edit (files) on below code to your folder dest
.pipe(gulp.dest('./files/'))

you need first to edit (score) on below code to any words to rename
.pipe(replace('score', 'h123456'))


