/**
 * MiniSchedule
 * @namespace myTournaments
 */
(function () {
  'use strict';

  angular
    .module('myTournaments.directive.htMyTournamentsMiniSchedule', [])
    .directive('htMyTournamentsMiniSchedule', htMyTournamentsMiniScheduleDirective);

  /**
   * @memberOf myTournaments
   * @namespace myTournaments.directive.htMyTournamentsMiniSchedule
   *
   * @description
   *
   *
   * @example <ht-myTournaments-miniSchedule></ht-myTournaments-miniSchedule>
   */
  function htMyTournamentsMiniScheduleDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/myTournaments/common/directives/htMyTournamentsMiniSchedule.directive.html',
      controller:       myTournamentsMiniScheduleController,
      controllerAs:     'myTournamentsMiniSchedule',
      bindToController: true

    };

  }

  function myTournamentsMiniScheduleController() {
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
