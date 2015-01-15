'use strict';

var url = require('url');

var config = require('../../config.json');
var baseUrl = url.resolve('https://na.api.pvp.net/api/lol/', config.region);

var champion = require('./champion')(baseUrl);
var game = require('./game')(baseUrl);
var league = require('./league')(baseUrl);
var match = require('./match')(baseUrl);
var matchHistory = require('./match-history')(baseUrl);
var stats = require('./stats')(baseUrl);
var summoner = require('./summoner')(baseUrl);
var team = require('./team')(baseUrl);

module.exports = {
    champion: champion,
    game: game,
    league: league,
    match: match,
    matchHistory: matchHistory,
    stats: stats,
    summoner: summoner,
    team: team
};
