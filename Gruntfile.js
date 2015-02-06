/*
* This Gruntfile does a livereload of this jekyll site
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
                        '_scss/'
                    ]
                },
                files: {
                    'css/angular/unstoppable.css': '_scss/angular/unstoppable.scss',
                    'css/angular/animate.css': '_scss/angular/animate.scss',
                    'css/home.css': '_scss/home.scss',
                    'css/blog/index.css': '_scss/blog/index.scss',
                    'css/blog/post.css': '_scss/blog/post.scss',
                    'css/error.css': '_scss/error.scss',
                    'css/resource.css': '_scss/resource.scss',
                    'css/workshop.css': '_scss/workshop.scss',
                    'css/workshop-confirmation.css': '_scss/workshop-confirmation.scss',
                    'css/workshop-live.css': '_scss/workshop-live.scss',
                    'css/the-invasion.css': '_scss/the-invasion.scss',
                }
            }
        },
        
        watch: {
            sass: {
                files: ['_scss/*.scss', '_scss/resources/*.scss', '_scss/angular/*.scss', '_scss/**/*.scss', '!.#*'],
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
                    '*.html', '*.yml', 'javascript/**.js', '**/_posts/**', 'blog/**', 'the-invasion/**',
                    'angular/**', '_includes/**', '_layouts/**', 'paid/**', 'workshops/**'
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
                path: 'http://localhost:<%= connect.server.options.port %>/'
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
