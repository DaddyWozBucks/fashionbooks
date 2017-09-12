const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const pug = require('gulp-pug')
const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
//gulp.watch('src/app/components/**/*.pug',['templates']);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
//function templates() {
//
// return gulp.src('src/app/components/**/*.pug')
//   .pipe(pug({
//     pretty: true
//   }))
//   .pipe(gulp.dest('src/app/components/**'))
//   
//
//  
//}


