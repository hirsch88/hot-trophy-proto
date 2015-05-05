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
      'myTournaments.directive.htMyTournamentsMiniTable',
      'myTournaments.directive.htMyTournamentsMiniSchedule',

      'myTournaments.list'
    ]);


})();
