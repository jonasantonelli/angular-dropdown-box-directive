'use strict';

// Compilação do LESS
module.exports = function(grunt) {


    return {
        options: {
            strictMath: true,
            cleancss: true
        },

        app: {
            src: '<%= pkg.assets.config.less %>/**/*.less',
            dest: '<%= pkg.assets.config.published.css %>/<%= pkg.assets.config.name %>.css'
        }
     
    };
};