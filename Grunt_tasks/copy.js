'use strict';


module.exports = function copy(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Options
	return {
	  
		 
		  scripts: {
		    src: ['scripts/main.min.js','scripts/main.min.js.map','scripts/libs/jquery.min.js'],
		    dest: 'wwwroot/',
		  },
		   images: {
		    src: 'images/**',
		    dest: 'wwwroot/css/',
		  },
		   webserver: {
		    src: 'webserver.js',
		    dest: 'wwwroot/',
		  },
		 
		  css_map: {		   
		     src: ['css/main.min.css','css/main.min.css.map'],
		    dest: 'wwwroot/',
		  },
		  fonts: {		   
		    src: 'fonts/*.*',
		    dest: 'wwwroot/css/',
		  },


	};
};
