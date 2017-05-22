const gulp = require('gulp');
const react = require('gulp-react');
const browserify = require('gulp-browserify');
// const uglify = require('gulp-uglify');

const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('compileJSX', function () {
	return gulp.src('./app/components/game.jsx')
	.pipe(react())
	.pipe (browserify())
	.pipe(rename('main.js'))
	.pipe(gulp.dest('./app/public'));
});

gulp.task('buildCSSProduction', function () {
	return gulp.src('./app/scss/index.scss')
		.pipe(sass().on('error', sass.logError)) // compile the sass file to a css file
		.pipe(cleanCSS()) // minify the css file
		.pipe(gulp.dest('./app/public')) // write the css file to ./server
});

gulp.task('watch', function() {
	gulp.watch('./app/components/*.jsx', ['compileJSX']);
});

gulp.task('default', ['buildCSSProduction', 'compileJSX', 'watch']);
