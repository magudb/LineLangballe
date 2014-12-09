'use strict';
module.exports = function uglify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Options
    return {
        all: {
            options: {
                sourceMap: true,
                mangle: true
            },
            files: {
                'content/scripts/main.min.js': ['content/scripts/libs/jquery.min.js',
                'content/scripts/libs/jquery.easing.1.3.js',
                'content/scripts/libs//bootstrap.js', 
                'content/scripts/libs/pace.min.js',
                'content/scripts/libs/retina.js', 
                'content/scripts/libs/device.min.js',
                'content/scripts/libs/classie.js', 
                'content/scripts/libs/jquery.touchSwipe.js',
                'content/scripts/libs/jquery.slimmenu.min.js', 
                'content/scripts/libs/waypoints.min.js', 
                'content/scripts/libs/jquery.parallax-1.1.3.js', 
                'content/scripts/libs/owl.carousel.min.js',
                'content/scripts/libs//jquery.bxslider.min.js',
                'content/scripts/libs/isotope.js',
                'content/scripts/libs/venobox.min.js',
                'content/scripts/custom/navmenu-init.js', 
                'content/scripts/custom/parallax-init.js', 
                'content/scripts/custom/carousel-init.js', 
                'content/scripts/custom/venobox-init.js',
                'content/scripts/custom/isotope-init.js', 
                'content/scripts/custom/main.js'
                  ],
                
            }
        }
    };
};
