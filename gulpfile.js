/*
 * @Author: iceStone
 * @Date:   2015-08-31 11:40:15
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-30 22:10:58
 */
'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
// const bs = require('browser-sync').create();
const electron = require('electron-prebuilt')
const spawn = require('child_process').spawn;
const plugins = gulpLoadPlugins();

const distDir = 'core';

gulp.task('clean', del.bind(null, [distDir, 'dist', 'src/renderer/css']));

gulp.task('less', () => {
  return gulp.src(['src/renderer/less/*.less', '!src/renderer/less/_*.less'])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('src/renderer/css'))
    .pipe(plugins.livereload());
  // .pipe(bs.stream({ match: '**/*.css' }));
});

gulp.task('useref', ['less'], () => {
  return gulp.src('src/renderer/*.html')
    .pipe(plugins.useref())
    // .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(plugins.if('*.css', plugins.cssnano({
      compatibility: '*'
    })))
    .pipe(gulp.dest(distDir + '/renderer'));
});

gulp.task('html', ['useref'], () => {
  return gulp.src(distDir + '/renderer/*.html')
    .pipe(plugins.htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest(distDir + '/renderer'));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/**/*.*',
    '!src/renderer/js/**/*.*',
    '!src/renderer/less/**/*.*',
    '!src/renderer/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest(distDir));
});

gulp.task('build', ['html', 'extras'], () => {
  return gulp.src(distDir + '/**/*').pipe(plugins.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('watch', ['less'], () => {
  plugins.livereload.listen( /* { basePath: 'src' } */ );

  gulp.watch([
    'src/renderer/**/*.html',
    'src/renderer/**/*.js'
  ]).on('change', e => {
    plugins.livereload.changed(e.path);
  });

  gulp.watch('src/renderer/less/**/*.less', ['less']);
});

gulp.task('test', ['watch'], () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  spawn(electron, ['.']);
});

function watch(callback) {

}
