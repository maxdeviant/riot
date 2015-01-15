'use strict';

var assert = require('assert');

var riot = require('../lib/api');

describe('riot', function () {
    describe('.champion', function () {

    });

    describe('.game', function () {

    });

    describe('.league', function () {

    });

    describe('.match', function () {

    });

    describe('.matchhistory', function () {

    });

    describe('.stats', function () {

    });

    describe('.summoner', function () {
        describe('.getSummonerByName', function () {
            it('should return a list of summoners', function () {
                riot.summoner.getSummonerByName(['maxdeviant']).then(function (data) {
                    assert(Array.isArray(data), true);
                });
            });

            it('should limit summoner names to 40');
        });

        describe('.getSummoner', function () {
            it('should return a list of summoners');

            it('should limit summoner IDs to 40');
        });

        describe('.getMasteries', function () {
            it('should return a list of mastery pages');

            it('should limit summoner IDs to 40');
        });

        describe('.getSummonerName', function () {
            it('should return a list of summoner names');

            it('should limit summoner IDs to 40');
        });

        describe('.getRunes', function () {
            it('should return a list of rune pages');

            it('should limit summoner IDs to 40');
        });
    });

    describe('.team', function () {

    });
});
