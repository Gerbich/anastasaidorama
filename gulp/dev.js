var gulp 		= require('gulp'),
	browserSync = require('browser-sync');
	
gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir: './src'
		}
	});
	notify: false
});

gulp.task('default',['browser-sync'], function(){
	gulp.watch('./src/*.html', browserSync.reload)
});