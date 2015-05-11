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
      'tournament.directive.htTournamentMiniTeams',
      'tournament.directive.htTournamentStatus',

      'tournament.tournament',
      'tournament.teams'

    ]);


})();
