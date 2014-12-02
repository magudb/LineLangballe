/// <vs BeforeBuild='default' AfterBuild='fasttest' />
/*global module */
'use strict';
(function(dust){
dust.helpers.strip = function (chunk, ctx, bodies, params) {
  var str = dust.helpers.tap(params.str, chunk, ctx);
  if (!str){
    return chunk.write('');
	}
  	var stripped =  str.replace(/[^a-zA-Z0-9]/g,'');
  	return chunk.write(stripped);
};
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust
  
));


var path = require('path');
module.exports = function (grunt) {
    require('grunt-config-dir')(grunt, {
        configDir: path.resolve('grunt_tasks'),
        verbose: true
    }, (function (err) { grunt.log.error(err); throw err;  }));
    
     require('time-grunt')(grunt);
   
    grunt.registerTask('default', ['less', 'uglify','copy','projectOverview','static_sitebuilder']);
   

};