'use strict';
module.exports = function static_sitebuilder(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt_static_sitebuilder');
    // Options
    return {
             static_sitebuilder: {
                options: {share:'shared/shared.json'},
                files: {
                  'wwwroot': ['data/*.json']
                }
            }
    };
};
