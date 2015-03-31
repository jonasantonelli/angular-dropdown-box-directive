/*
 * Angular-Dropdown-Box-Directive Gruntfile 
 * Copyright 2015 Jonas Antonelli
 */

module.exports = function(grunt) {

    'use strict';

    var path = require('path');
    var pkg = grunt.file.readJSON('package.json');

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        data: {
            pkg: pkg
        }
    });


    grunt.registerTask('dev', [
        'less',
        'autoprefixer',
        'concat:app',
        'jshint:angular'
    ]);



    // Padrão: ambiente de desenvolvimento
    grunt.registerTask('default', ['dev', 'watch', 'notify']);
};