'use strict';

var url = require('url');

var config = require('../../config.json');
var baseUrl = url.resolve('https://na.api.pvp.net/api/lol/', config.region);

var match = require('./match')(baseUrl);
var summoner = require('./summoner')(baseUrl);

summoner.getSummonerByName(['maxdeviant']).then(function (data) {
    console.log(data);
});

summoner.getSummoner(['21713131']).then(function (data) {
    console.log(data);
});
