var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var Uglify = require('gulp-uglify');
//定义任务
gulp.task('minifycss',function(){
	gulp.src('./css/*.css')
		.pipe(concat('bundle.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./css'))
})

gulp.task('uglify',function(){
	gulp.src('./js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(Uglify())
		.pipe(gulp.dest('./js'))
})

gulp.task('server',function(){
	gulp.src('.')
		.pipe(webserver({
			host:'localhost',
			port:8080,
			livereload:true,
			fallback:'index.html',
			middleware:function(req,res,next){
				var filepath = req.url.split('/')[1];
				var filename = path.join(__dirname,'data',filename + ".json")
			}

		}))
})