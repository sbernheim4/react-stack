var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require("gulp-browserify");
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('compileJSX', function () {
	return gulp.src('./app/components/game.jsx')
	.pipe(react())
	.pipe (browserify())
	.pipe(gulp.dest('./app/public'));
});

gulp.task("default",["compileJSX"], function(){
	console.log("Gulp completed...");
});


gulp.task('buildCSSProduction', function () {
	return gulp.src('./app/scss/index.scss')
		.pipe(sass().on('error', sass.logError)) // compile the sass file to a css file
		.pipe(cleanCSS()) // minify the css file
		.pipe(gulp.dest('./app/public')) // write the css file to ./server
});
