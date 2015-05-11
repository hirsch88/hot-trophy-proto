/**
 * MiniTeams
 * @namespace Tournament
 */
(function () {
  'use strict';

  angular
    .module('tournament.directive.htTournamentMiniTeams', [])
    .directive('htTournamentMiniTeams', htTournamentMiniTeamsDirective);

  /**
   * @memberOf Tournament
   * @namespace Tournament.directive.htTournamentMiniTeams
   *
   * @description
   *
   *
   * @example <ht-tournament-mini-teams></ht-tournament-mini-teams>
   */
  function htTournamentMiniTeamsDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/Tournament/common/directives/htTournamentMiniTeams.directive.html',
      controller:       TournamentMiniTeamsController,
      controllerAs:     'htTournamentMiniTeams',
      bindToController: true

    };

  }

  function TournamentMiniTeamsController() {
    var vm = this;
    vm.teams = vm.tournament.getTeams();


  }


}());
