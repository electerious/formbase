'use strict'

const { writeFile } = require('fs')
const { promisify } = require('util')
const sass = require('rosid-handler-sass')
const save = promisify(writeFile)

sass('src/styles/main.scss', {

	optimize: true

}).then((data) => {

	return save('dist/formbase.min.css', data)

})