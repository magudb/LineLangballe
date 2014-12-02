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
                'scripts/main.min.js': ['scripts/libs/jquery.min.js',
                'scripts/libs/jquery.easing.1.3.js',
                'scripts/libs//bootstrap.js', 
                'scripts/libs/pace.min.js',
                'scripts/libs/retina.js', 
                'scripts/libs/device.min.js',
                'scripts/libs/classie.js', 
                'scripts/libs/jquery.touchSwipe.js',
                'scripts/libs/jquery.slimmenu.min.js', 
                'scripts/libs/waypoints.min.js', 
                'scripts/libs/jquery.parallax-1.1.3.js', 
                'scripts/libs/owl.carousel.min.js',
                'scripts/libs//jquery.bxslider.min.js',
                'scripts/libs/isotope.js',
                'scripts/libs/venobox.min.js',
                'scripts/custom/navmenu-init.js', 
                'scripts/custom/parallax-init.js', 
                'scripts/custom/carousel-init.js', 
                'scripts/custom/venobox-init.js',
                'scripts/custom/isotope-init.js', 
                'scripts/email.js',
                'scripts/custom/main.js'
                  ],
                
            }
        }
    };
};
