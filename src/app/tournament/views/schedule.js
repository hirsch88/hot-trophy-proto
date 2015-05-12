/**
 * Schedule
 * @namespace tournament
 */
(function () {
  'use strict';

  /**
   * @memberOf tournament
   * @namespace schedule
   *
   * @description
   *
   * Route: /schedule
   */
  angular
    .module('tournament.schedule', [])
    .config(StateConfig)
    .controller('htTournamentScheduleController', htTournamentScheduleController);


  /**
   * @memberOf tournament.schedule
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.TournamentSchedule', {
        url:           '/:id/schedule',
        session:       true,
        navigationKey: 'tournament',
        views:         {
          'content': {
            templateUrl:  'app/tournament/views/schedule.html',
            controller:   'htTournamentScheduleController',
            controllerAs: 'htTournamentSchedule'
          }
        }

      });
  }


  /**
   * @memberOf tournament.schedule
   * @name TournamentScheduleController
   */
  function htTournamentScheduleController($stateParams, htTournaments, $timeout) {
    var vm = this;

    vm.tournament = htTournaments.get($stateParams.id);
    vm.modifiedGameId = 1;

    vm.form = {};

    vm.schedule = [];
    _(vm.tournament.schedule)
      .forEach(function (row) {
        vm.schedule.push(row[0]);
        vm.schedule.push(row[1]);
      })
      .value();

    console.log(vm.schedule);


    vm.onChange = function (index, game) {
      if (game.scoreHome !== '' && game.scoreAway !== '' && game.scoreHome !== null &&
        game.scoreAway !== null && game.scoreHome !== undefined && game.scoreAway !== undefined
        && _.isNumber(parseInt(game.scoreHome, 10)) && _.isNumber(parseInt(game.scoreAway, 10))) {
        game.changed = true;
      } else {
        game.changed = false;
      }
    };

    vm.cancel = function (index, game) {
      game.changed = false;
      game.scoreHome = null;
      game.scoreAway = null;
      vm.form[index].$setPristine();
    };

    vm.save = function (index, game) {
      game.changed = false;
      vm.form[index].$setPristine();

      game.scoreHome = parseInt(game.scoreHome,10);
      game.scoreAway = parseInt(game.scoreAway,10);

      game.loading = true;
      $timeout(function () {
        game.loading = false;
        game.saved = true;

        $timeout(function () {
          game.saved = false;

        }, 2000);

      }, 800);


    };


  }


}());
