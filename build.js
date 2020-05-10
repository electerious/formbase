'use strict'

const { writeFile } = require('fs').promises
const sass = require('rosid-handler-sass')

sass('src/styles/main.scss', {

	optimize: true

}).then((data) => {

	return writeFile('dist/formbase.min.css', data)

})