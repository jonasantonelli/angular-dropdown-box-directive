'use strict';

// Juntar os arquivos JS
module.exports = {
    options: {
        stripBanners: true,
        separator: ';'
    },

    app: {
        src:'<%= pkg.assets.config.application %>/**/*.js',
        dest: '<%= pkg.assets.config.published.js%>/application.js'
    },
};