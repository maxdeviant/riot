'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['game'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'game');

    var getRecent = function (summonerId) {
        var requestUrl = util.buildUrl(baseUrl, 'by-summoner', summonerId, 'recent');

        return util.doGet(requestUrl);
    };

    return {
        'getRecent': getRecent
    };
};
