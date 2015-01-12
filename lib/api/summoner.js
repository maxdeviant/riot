'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['summoner'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'summoner');

    var getSummonerByName = function (summonerNames) {
        if (summonerNames.length > 40) {
            // Too many names
        }

        var requestUrl = util.buildUrl(baseUrl, 'by-name', summonerNames.join(','));

        return util.doGet(requestUrl);
    };

    var getSummoner = function (summonerIds) {
        if (summonerIds.length > 40) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, summonerIds.join(','));

        return util.doGet(requestUrl);
    };

    var getMasteries = function (summonerIds) {
        if (summonerIds.length > 40) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, summonerIds.join(','), 'masteries');

        return util.doGet(requestUrl);
    };

    var getSummonerName = function (summonerIds) {
        if (summonerIds.length > 40) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, summonerIds.join(','), 'name');

        return util.doGet(requestUrl);
    };

    var getRunes = function (summonerIds) {
        if (summonerIds.length > 40) {
            // Too many IDs
        }

        var requestUrl = util.buildUrl(baseUrl, summonerIds.join(','), 'runes');

        return util.doGet(requestUrl);
    };

    return {
        'getSummonerByName': getSummonerByName,
        'getSummoner': getSummoner,
        'getMasteries': getMasteries,
        'getSummonerName': getSummonerName,
        'getRunes': getRunes
    };
};
