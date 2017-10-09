/**
 * Created by Administrator on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
//压缩多个js文件并合并成一个文件
gulp.task('js',function(){
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});
//启动一个服务
gulp.task('webserver',function(){
   gulp.src('./')
       .pipe(webserver({
           livereload:{
               enable:true
           },
           directoryListing:{
               path:"./",
               enable:true
           },
           open:true,
           fallback:"index.html"
       }))
});