'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['league'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'league');

    return {

    };
};
