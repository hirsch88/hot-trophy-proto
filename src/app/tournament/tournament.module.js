/**
 * @namespace tournament
 *
 * @description
 *
 */
(function () {
  'use strict';

  angular
    .module('tournament', [
      'tournament.directive.htTournamentMiniTable',
      'tournament.directive.htTournamentMiniSchedule',

      'tournament.tournament'

    ]);


})();
