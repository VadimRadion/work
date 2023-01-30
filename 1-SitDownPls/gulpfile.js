const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const image = require('gulp-image')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const gulpif = require('gulp-if')
const argv = require('yargs').argv
const browserSync = require('browser-sync').create()

const isDev = function () {
  return !argv.build;
}
const isProd = function () {
  return !!argv.build;
}

const clear = () => {
  return del('dist')
}

const fonts = () => {
  return src(
    'src/fonts/*')
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
}

const resources = () => {
  return src('src/libs/**/*.js')
    .pipe(dest('dist/libs'))
}
const libscss = () => {
  return src('src/libscss/**/*.css')
    .pipe(dest('dist/libscss'))
}

const styles = () => {
  return src('src/styles/**/*.css')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin(gulpif(isProd(), ({
      collapseWhitespace: true,
    }))))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scriptMain = () => {
  return src('src/js-main/**/*.js')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}
const scriptCatalog = () => {
  return src('src/js-catalog/**/*.js')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('catalog.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}
const scriptCard = () => {
  return src('src/js-card/**/*.js')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('card.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}
const watchFiles = () => {
  browserSync.init(({
    server: {
      baseDir: 'dist'
    }
  }))
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/**/*.jpeg',
    'src/images/**/*.svg',
    'src/images/**/*.ico',
  ])

    .pipe(gulpif(isProd(), image()))
    .pipe(dest('dist/images'))

}
watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/js-main/**/*.js', scriptMain)
watch('src/js-catalog/**/*.js', scriptCatalog)
watch('src/js-card/**/*.js', scriptCard)
watch('src/libs/**/*.js', resources)
watch('src/libscss/**/*.css', libscss)


exports.styles = styles
exports.scriptMain = scriptMain
exports.scriptCatalog = scriptCatalog
exports.scriptCard = scriptCard
exports.htmlMinify = htmlMinify
exports.default = series(clear, resources, libscss, fonts, htmlMinify, scriptMain, scriptCatalog, scriptCard, styles, images, watchFiles)
