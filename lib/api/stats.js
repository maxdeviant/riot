'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['stats'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'stats');

    var getRanked = function (summonerId, season) {
        var requestUrl = util.buildUrl(baseUrl, 'by-summoner', summonerId, 'ranked');

        if (season) {
            requestUrl = util.buildUrl(requestUrl, '?season=SEASON' + season);
        }

        return util.doGet(requestUrl);
    };

    var getSummary = function (summonerId, season) {
        var requestUrl = util.buildUrl(baseUrl, 'by-summoner', summonerId, 'summary');

        if (season) {
            requestUrl = util.buildUrl(requestUrl, '?season=SEASON' + season);
        }

        return util.doGet(requestUrl);
    };

    return {
        'getRanked': getRanked,
        'getSummary': getSummary
    };

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
