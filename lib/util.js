'use strict';

var q = require('q');
var url = require('url');
var request = require('request');

var config = require('../config.json');

module.exports = function () {
    var buildUrl = function () {
        var url = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            url = url + (url[url.length - 1] === '/' ? '' : '/') + arguments[i].replace(/\//g, '');
        }

        return url;
    };

    var doGet = function (url) {
        var deferred = q.defer();

        request.get(buildUrl(url, '?api_key=' + config.api_key), function (error, response, body) {
            if (error) {
                deferred.reject(error);
            }

            if (response.statusCode === 200) {
                deferred.resolve(body);
            }
        });

        return deferred.promise;
    };

    return {
        'buildUrl': buildUrl,
        'doGet': doGet
    };
};
