var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var htmlmin = require('gulp-html-minifier2');
//pasta onde fica o scss
var scssFiles = './source/scss/*.scss';
//pasta de destino css
var cssDest = './dist/css/';
var htmlFile = './source/*.html';
var htmlDest = './dist';
var sassMin = {
	outputStyle: 'compressed'
}

//tarefa para compilar e minificar
gulp.task('compile-sass', function(){
	return gulp.src(scssFiles)
	.pipe(sass(sassMin).on('error', sass.logError))
	.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(scssFiles, ['compile-sass']);
	gulp.watch(htmlFile,['minify-html']);
});



gulp.task('minify-html', function() {
  gulp.src(htmlFile)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest))
});

gulp.task('default', ['compile-sass', 'watch' , 'minify-html', ]);