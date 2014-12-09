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
	            sourceMapFilename: 'content/css/main.min.css.map'
	           },
	        files: {
	            "content/css/main.min.css": "content/css/main.less"
	        }
	    }
	};
};
