// From: http://stackoverflow.com/questions/21798840/how-use-mocha-test-framework-with-node-js-and-sails-js
'use strict';

module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['tests/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
