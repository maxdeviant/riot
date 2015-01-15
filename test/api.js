'use strict';

var assert = require('assert');

var riot = require('../lib/api');

describe('riot', function () {
    describe('.summoner', function () {
        describe('.getSummonerByName', function () {
            it('should return an array', function () {
                riot.summoner.getSummonerByName(['maxdeviant']).then(function (data) {
                    assert(Array.isArray(data), true);
                });
            });
        });
    });
});
