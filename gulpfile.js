const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const cssFiles = [
    './css/style.css'
];
const jsFiles = [
    './js/*.js'
];

function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

gulp.task('default', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./css/**/*.css', styles);
    gulp.watch('./js/**/*.js', scripts);
    gulp.watch('./*.html', browserSync.reload);
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.parallel(styles, scripts, imagemin)
);

gulp.task('dev', gulp.series('build', 'watch'));