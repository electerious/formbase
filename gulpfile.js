'use strict'

const name = require('./package.json').moduleName
const gulp = require('gulp')
const tasks = require('@electerious/basictasks')(gulp, name)

const styles = tasks.styles({
	from: './src/styles/main.scss',
	to: './dist'
})

gulp.task('default', gulp.series(styles))