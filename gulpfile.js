const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('buildCSS', () => {
	return gulp.src('src/scss/*.scss')
	.pipe(concat('App.css'))
	.pipe(sass())
	.pipe(gulp.dest('src/'));
})

gulp.task('watch', () => {
	gulp.watch('src/scss/*.scss', ['buildCSS']);
})

gulp.task('default', ['watch']);
