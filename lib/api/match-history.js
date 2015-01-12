'use strict';

'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['match_history'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'matchhistory');

    var getHistory = function (summonerId, championIds, rankedQueues, beginIndex, endIndex) {
        var requestUrl = util.buildUrl(baseUrl, summonerId);

        return util.doGet(requestUrl);
    };

    return {
        'getHistory': getHistory
    };
};
