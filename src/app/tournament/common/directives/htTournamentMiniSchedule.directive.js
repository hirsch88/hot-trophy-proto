/**
 * MiniSchedule
 * @namespace Tournament
 */
(function () {
  'use strict';

  angular
    .module('tournament.directive.htTournamentMiniSchedule', [])
    .directive('htTournamentMiniSchedule', htTournamentMiniScheduleDirective);

  /**
   * @memberOf Tournament
   * @namespace Tournament.directive.htTournamentMiniSchedule
   *
   * @description
   *
   *
   * @example <ht-Tournament-miniSchedule></ht-Tournament-miniSchedule>
   */
  function htTournamentMiniScheduleDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/Tournament/common/directives/htTournamentMiniSchedule.directive.html',
      controller:       TournamentMiniScheduleController,
      controllerAs:     'htTournamentMiniSchedule',
      bindToController: true

    };

  }

  function TournamentMiniScheduleController() {
    var vm = this;

    vm.schedule = [];
    _(vm.tournament.schedule)
      .forEach(function (row) {
        vm.schedule.push(row[0]);
        vm.schedule.push(row[1]);
      })
      .value();

    vm.schedule = _(vm.schedule)
      .filter(function (game) {
        return game.scoreHome !== null && game.scoreAway !== null;
      })
      .value();


  }


}());
