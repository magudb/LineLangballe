'use strict';


module.exports = function projectOverview(grunt) {
	// Load task
	grunt.registerMultiTask('projectOverview', 'Log stuff.', function() {
		grunt.log.writeln(this.target + ': ' + this.data);
		var files = grunt.file.expand(this.data)
		var index = {
				"template":"templates/projectOverview.dust",
				"output":"projects/index.html",
				"data":{
					"projects" :[]
				}
			}

		for(var i = 0;i<files.length;i++){
			var file = grunt.file.readJSON(files[i]);
			grunt.log.writeln(file.template);
			if(file.template === 'templates/project.dust'){
				index.data.projects.push(file);
			}
		}
		
		grunt.file.write('data/projects.json', JSON.stringify(index, null, 2));
		
	});
	
	// Options
	return { 
		files: 'data/*.json'
    }
	
};
