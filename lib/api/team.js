'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['team'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'team');

    var getTeamBySummoner = function (summonerIds) {
        if (summonerIds.length > 10) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, 'by-summoner', summonerIds.join(','));

        return util.doGet(requestUrl);
    };

    var getTeam = function (teamIds) {
        if (teamIds.length > 10) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, 'by-summoner', teamIds.join(','));

        return util.doGet(requestUrl);
    };

    return {
        'getTeamBySummoner': getTeamBySummoner,
        'getTeam': getTeam
    };
};
