module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'scripts/app.js','scripts/controllers/*.js'
                    ],
                dest: 'deploy/scripts.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};