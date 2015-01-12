'use strict';

var url = require('url');

var config = require('../../config.json');
var baseUrl = url.resolve('https://na.api.pvp.net/api/lol/', config.region);

// console.log(baseUrl)

var summoner = require('./summoner')(baseUrl);

summoner.getSummonerByName(['maxdeviant']).then(function (data) {
    console.log(data);
});

// console.log(summoner.getSummonerByName());
