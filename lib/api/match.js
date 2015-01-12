'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['match'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'match');

    var getMatch = function (matchId, includeTimeline) {
        var requestUrl = util.buildUrl(baseUrl, matchId);

        if (includeTimeline) {
            requestUrl = util.buildUrl(requestUrl, '?includeTimeline=' + includeTimeline);
        }

        return util.doGet(requestUrl);
    };

    return {
        'getMatch': getMatch
    };
};
