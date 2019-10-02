'use strict'; //means use strict js code

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    
    require('jit-grunt')(grunt);

    grunt.initConfig({
        //this sass tasks compiles scss into css file
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },//-do  not forget this comma
        //this watch task automatically updates css file when scss is updated
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        //browserSync updates the page live
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};