let gulp    = require('gulp'),
    pug     = require('gulp-pug'),
    stylus  = require('gulp-stylus'),
    connect = require('gulp-connect')

gulp.task('pug', () => {
  return gulp.src('./src/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./out/'))
      .pipe(connect.reload())
})

gulp.task('stylus', () => {
  return gulp.src('./src/css/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./out/css'))
      .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.pug'], ['pug'])
  gulp.watch(['./src/css/**/*.styl'], ['stylus'])
})

gulp.task('connect', () => {
  connect.server({
    root: './out',
    livereload: true
  })
})

gulp.task('build', ['pug', 'stylus'])
gulp.task('server', ['connect', 'watch'])
