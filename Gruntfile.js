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
        connect: {
    server: {
      options: {
        port: 9001,
        //base: 'GreedyGame',
        keepalive:true
      }
    }
  }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("default",['connect']);
};