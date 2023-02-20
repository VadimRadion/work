const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const sourcemap = require('gulp-sourcemaps')
const del = require('del')
const gulpif = require('gulp-if')
const argv = require('yargs').argv


const isDev = function () {
    return !argv.build;
}
const isProd = function () {
    return !!argv.build;
}

const clean = () => {
    return del(['dist'])
}

const styles = () => {
    return src('src/styles/**/*.css')
        .pipe(gulpif(isProd(), sourcemap.init()))
        .pipe(concat('main.css'))
        .pipe(gulpif(isProd(),autoprefixes({
            cascade: false

        })))
        .pipe(gulpif(isProd(), cleanCSS({
            level: 2
        })))
        .pipe(gulpif(isProd(), sourcemap.init()))
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

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)

exports.styles = styles
exports.htmlMinify = htmlMinify
exports.default = series(clean, htmlMinify, styles, watchFiles)