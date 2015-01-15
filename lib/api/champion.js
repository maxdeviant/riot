'use strict';

var q = require('q');
var util = require('../util')();

var config = require('../../config.json');
var version = require('./versions.json')['champion'];

module.exports = function (baseUrl) {
    baseUrl = util.buildUrl(baseUrl, version, 'champion');

    return {

    };
};
