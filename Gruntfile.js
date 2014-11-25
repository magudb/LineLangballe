/// <vs BeforeBuild='default' AfterBuild='fasttest' />
/*global module */
'use strict';

var path = require('path');
module.exports = function (grunt) {
    require('grunt-config-dir')(grunt, {
        configDir: path.resolve('grunt_tasks'),
        verbose: true
    }, (function (err) { grunt.log.error(err); throw err;  }));
    
     require('time-grunt')(grunt);
   
    grunt.registerTask('default', ['less', 'uglify','copy','static_sitebuilder']);
   

};