/*
* This Gruntfile does a livereload of the jekyll site in the angular directory.
* it does this in two ways
* 1. the scss is watched, compiled, autoprefixed and then copied to the _site directory
* 2. the jekyll blog files, like html and stuff, is watched and when it changes prompts jekyll to build
* and replace the _site folder.
* 
*/

module.exports = function(grunt) {
    
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    // Project configuration.
    grunt.initConfig({
        
        /* the copy command gets run after the sass is compiled and autoprefixed */
        copy: {
            css : {
                files: [
                    {expand: true, src: ['css/**'], dest: '_site/'},
                ]
            }
        },

        /* the shell command is run only when non-CSS files change. */
        shell: {
            jekyll: {
                command: 'rm -rf _site/*;  jekyll build',
                stdout: true
            }
        },
        
        autoprefixer: {
            // prefix all files
            top: {
                expand: true,
                src: 'css/**/*.css',
                dest: ''
            },
        },

        sass: {
            dist: {
                options: {
                    includePaths: [
                        'scss/'
                    ]
                },
                files: {
                    'css/404.css': 'scss/404.scss',
                    'css/angular/lesson-1.css': 'scss/angular/lesson-1.scss',
                    'css/angular/index.css': 'scss/angular/index.scss',
                    'css/paid/angular/index.css': 'scss/angular/index.scss',
                    'css/paid/syllabus.css': 'scss/paid/syllabus.scss',
                    'css/index.css': 'scss/index.scss',
                    'css/email.css': 'scss/email.scss',
                    'css/app/registration.css': 'scss/app/registration.scss',
                    'css/app/upgrade.css': 'scss/app/upgrade.scss',
                    'css/paid/angular/one/lesson.css': 'scss/paid/angular/one/lesson.scss'
                }
            }
        },
        
        watch: {
            sass: {
                files: ['scss/*.scss', 'scss/angular/*.scss', 'scss/**/*.scss', '!.#*'],
                tasks: ['sassCopy'],
                options: {
                    spawn: false, //faster I think
                    livereload: true
                }
            },
            
            options: {
                livereload: true,
                dot: false
            },
            
            jekyllSources: {
                files: [
                    // capture all except css
                    '*.html', '*.yml', 'javascript/**.js', '**/_posts/**',
                    '_includes/**', '_layouts/**', 'angular/**', 'paid/**'
                ],
                tasks: ['shell:jekyll'] //runs jekyll build
            }
        },
        
        //run the server on the _site
        connect: {
            server: {
                options: {
                    base: '_site/',
                    port: 9009
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.server.options.port %>/paid/angular/five/intro'
            }
        }
    });
    
/* 
   //don't need, but keep them documented here so I know what tasks
   // are loaded automagically
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-connect');*/
    
    grunt.registerTask('sassCopy', ['sass', 'autoprefixer', 'copy:css']);
    grunt.registerTask('server', [
        'shell:jekyll',
        'connect:server',
        'open:server',
        'sassCopy',
        'watch'
    ]);
    
    // Default task.
    grunt.registerTask('default', 'server');
    
};
