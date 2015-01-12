'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['match'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'match');

    var getMatch = function (matchId, includeTimeline) {
        var requestUrl;

        if (includeTimeline) {
            requestUrl = util.buildUrl(baseUrl, matchId, '?includeTimeline=1');
        } else {
            requestUrl = util.buildUrl(baseUrl, matchId);
        }

        return util.doGet(requestUrl);
    };

    return {
        'getMatch': getMatch
    };
};
