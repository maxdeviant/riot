'use strict';

var url = require('url');
var request = require('request');
var buildUrl = require('../util')().buildUrl;

var config = require('../../config.json');
var version = require('./versions.json')['summoner'];

module.exports = function (baseUrl) {
    baseUrl = buildUrl(baseUrl, version, 'summoner');

    return {
        getSummonerByName: function (summonerNames) {
            if (summonerNames.length > 40) {
                // Too many names
            }

            var requestUrl = buildUrl(baseUrl, 'by-name', summonerNames.join(','));

            console.log(buildUrl(requestUrl, '?api_key=' + config.api_key))

            request.get(buildUrl(requestUrl, '?api_key=' + config.api_key), function (error, response, body) {
                if (error) {
                    console.log(error);
                }

                if (response.statusCode === 200) {
                    console.log(body);
                }
            });

            return requestUrl;
        }
    };
};
