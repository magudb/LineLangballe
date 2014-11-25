'use strict';


module.exports = function less(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// Options
	return {
	    development: {
	        options: {
	            cleancss: true,
	            sourceMap: true,
	            compress: true,
	            sourceMapFilename: 'css/main.min.css.map'
	           },
	        files: {
	            "css/main.min.css": "css/main.less"
	        }
	    }
	};
};
