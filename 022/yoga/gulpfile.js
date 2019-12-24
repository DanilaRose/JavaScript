var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({cascade: false}))
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "src/"
		}
		});
	});

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('script', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('js', function() {
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js'])
		.pipe(concat('lib.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js/'))
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'))
	gulp.watch('src/**/*.html', gulp.parallel('html'))
	gulp.watch('src/js/**/*.js', gulp.parallel('script'))
	});

gulp.task('default', gulp.parallel(
	'sass', 'js', 'browser-sync', 'watch'))



