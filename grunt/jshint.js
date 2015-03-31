'use strict';

// JSHint - Qualidade do código
module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    
    // AngularJS
    angular: [
        '<%= pkg.assets.config.application %>/**/*.js'
    ],


    Gruntfile: 'Gruntfile.js'
};