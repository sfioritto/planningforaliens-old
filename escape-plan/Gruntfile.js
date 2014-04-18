/*global module:false*/
module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        sass: {
            dist: {
                files: {
                    'index.css': 'index.scss'
                }
            }
        },
         autoprefixer: {
            // prefix all files
            multiple_files: {
                expand: true,
                flatten: true,
                src: '*.css', 
                dest: 'css/'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        nodeunit: {
            files: ['test/**/*_test.js']
        },
        watch: {
            sass: {
                files: ['*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });
    
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    
    // Default task.
    grunt.registerTask('default', ['watch', 'autoprefixer', 'sass']);
    
};
