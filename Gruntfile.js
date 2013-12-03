module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    requirejs: {
      development: {
        options: {
          mainConfigFile: "src/config.js",
          baseUrl: "src",
          name: "main",
          insertRequire: ["main"],
          out: "js/main.min.js",
          optimize: 'none',
          findNestedDependencies: true,
          wrap: true
        }
      },
      production: {
        options: {
          mainConfigFile: "src/config.js",
          baseUrl: "src",
          name: "main",
          insertRequire: ["main"],
          out: "js/main.min.js",
          optimize: 'uglify2',
          findNestedDependencies: true,
          wrap: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      src: {
        files: 'src/**/*.js',
        tasks: ['development']
      },
      js: {
        files: 'js/**/*.js',
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('development', ['requirejs:development']);
  grunt.registerTask('production', ['requirejs:production']);
};
