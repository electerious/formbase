'use strict'

let name = require('./package.json').moduleName
let gulp = require('gulp')
let tasks = require('@electerious/basictasks')(gulp, name)

const styles = tasks.styles({
	from: './src/styles/main.scss',
	to: './dist'
})

const watch = function() {
	gulp.watch('./src/styles/**/*.scss', [ 'styles' ])
}

gulp.task('styles', styles)
gulp.task('default', [ 'styles' ])
gulp.task('watch', [ 'default' ], watch)