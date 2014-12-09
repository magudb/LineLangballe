'use strict';


module.exports = function copy(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Options
	return {
	  
		 content: {		   
		    expand: true,
		    cwd: 'content/',
		    src: '**',
		    dest: 'wwwroot/',
		    
		  },
	   	webserver: {
		    src: 'webserver.js',
		    dest: 'wwwroot/',
	  	}	 
		 
	};
};
