var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
 
var destPath = './libs/';
 
// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});
 
gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'            
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});
 
var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (resolve, reject) {

  
  

    var tsResult = gulp.src([
            "tsScripts/*.ts"
        ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter())
        .on('error',function(a) {
            
        });
       

    

    return tsResult.js.pipe(gulp.dest('./Scripts'));
});
 
gulp.task('watch', ['watch.ts']);
 
gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/*.ts', ['ts']);
});
 
gulp.task('default', ['scriptsNStyles', 'watch']);