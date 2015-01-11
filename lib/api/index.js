'use strict';

var url = require('url');

var config = require('../../config.json');
var baseUrl = url.resolve('https://prod.api.pvp.net/api/lol/', config.region);

console.log(baseUrl);
