/**
 * @namespace myTournaments
 *
 * @description
 *
 */
(function () {
  'use strict';

  angular
    .module('myTournaments', [
      'myTournaments.directive.htMyTournamentsTile',
      'myTournaments.directive.htMyTournamentsStatus',

      'myTournaments.list'
    ]);


})();
