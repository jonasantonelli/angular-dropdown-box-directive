'use strict';

// Autoprefixer dos CSS vendor
module.exports = {
    options: {
        livereload: true,
    },


    less: {
        files: '<%= pkg.assets.config.less %>/**/*.less',
        tasks: ['less:app', 'autoprefixer:all', 'notify:less']
    },

    js: {
        files: '<%= pkg.assets.config.application %>/**/*.js',
        tasks: ['concat:app', 'jshint:angular', 'notify:js']
    },

};