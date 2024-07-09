// モジュールの読み込み
const gulp = require("gulp");
const rename = require("gulp-rename");
const handlebars = require('handlebars');
const hbsAll = require('gulp-handlebars-all')
const htmlmin = require('gulp-html-minifier');


gulp.task('default', function () {
    options = {
        partialsDirectory : ['./templates/partials/**']
    }

    return gulp.src('templates/index.hbs')
        .pipe(gulpHandlebars( options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('hbsToHTML', function() {
    return gulp .src('templates/*.hbs')
    .pipe(hbsAll('html', {
      context: {foo: 'bar'},
      partials: ['templates/partials/**/*.hbs'],
    }))
    .pipe(rename('index.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task(
    "build",
    gulp.series(
        "hbsToHTML"
      )
    );