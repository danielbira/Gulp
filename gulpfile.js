const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}


function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagem(){
    return gulp.src('./source/imagem/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagem'));
}

exports.sass = compilaSass;
exports.js = comprimeJs;
exports.imagem = comprimeImagem;