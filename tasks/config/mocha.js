// From: http://stackoverflow.com/questions/21798840/how-use-mocha-test-framework-with-node-js-and-sails-js
'use strict';

module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec',
        require: 'coffee-script/register',
        timeout: 30,
        bail: true
      },
      src: ['tests/**/*.spec.js', 'tests/**/*.spec.coffee']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
