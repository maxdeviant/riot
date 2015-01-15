'use strict';

var url = require('url');

var config = require('../../config.json');
var baseUrl = url.resolve('https://na.api.pvp.net/api/lol/', config.region);

var match = require('./match')(baseUrl);
var summoner = require('./summoner')(baseUrl);

module.exports = {
    match: match,
    summoner: summoner
};
