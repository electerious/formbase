'use strict'

const name = require('./package.json').moduleName
const gulp = require('gulp')
const tasks = require('@electerious/basictasks')(gulp, name)

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