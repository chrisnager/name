module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            dist: {
                files: {
                    'build/css/app.css': 'src/css/app.css'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'js/fastclick.js',
                    'js/app.js'
                ],
                dest: 'build/js/app.js',
            }
        },
        inline: {
            dist: {
                options:{
                    cssmin: true,
                    uglify: true,
                    tag: 'build/'
                },
                src: [ 'index.html' ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'src/index.html'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/css/app.css'],
                tasks: ['autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'inline', 'htmlmin']);
};
