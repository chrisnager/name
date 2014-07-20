module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            dist: {
                files: {
                    'build/css/app.css': 'css/app.css'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/css/app.min.css': 'build/css/app.css'
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
        uglify: {
            build: {
                src: 'build/js/app.js',
                dest: 'build/js/app.min.js'
            }
        },
        watch: {
            styles: {
                files: ['css/app.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'concat', 'uglify']);
};
