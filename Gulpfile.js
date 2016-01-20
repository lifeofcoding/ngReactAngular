var gulp = require('gulp');
var react = require('gulp-react');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('jsx', function() {
    return gulp.src('jsx/**.jsx')
        .pipe(react())
        .pipe(gulp.dest('./'))
    ;
})

gulp.task('default', function () {
    gulp.watch(['jsx/*.jsx'],
        function(event) {
            gulp.start('jsx');
        }
    );

    browserSync({
        port: 9090,
        files: ['./**.js', 'index.html'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 250,
        reloadDebounce: 2000,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    });
});
