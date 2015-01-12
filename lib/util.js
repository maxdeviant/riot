'use strict';

var url = require('url');

module.exports = function () {
    return {
        buildUrl: function () {
            var url = arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                url = url + (url[url.length - 1] === '/' ? '' : '/') + arguments[i].replace(/\//g, '');
            }

            return url;
        }
    }
};
