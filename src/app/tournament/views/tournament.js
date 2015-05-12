/**
 * Tournament
 * @namespace tournament
 */
(function () {
  'use strict';

  /**
   * @memberOf tournament
   * @namespace tournament
   *
   * @description
   *
   * Route: /tournament
   */
  angular
    .module('tournament.tournament', [])
    .config(StateConfig)
    .controller('htTournamentController', htTournamentController);


  /**
   * @memberOf tournament.tournament
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.tournament', {
        url:           '/:id/tournament',
        session:       true,
        navigationKey: 'tournament',
        header:        {
          signIn:           false,
          profile:          true,
          myTournaments:    true,
          createTournament: true
        },
        views:         {
          'content': {
            templateUrl:  'app/tournament/views/tournament.html',
            controller:   'htTournamentController',
            controllerAs: 'htTournament'
          }
        }

      });
  }


  /**
   * @memberOf tournament.tournament
   * @name DashbaordTournamentController
   */
  function htTournamentController($stateParams, htTournaments) {
    var vm = this;

    vm.tournament = htTournaments.get($stateParams.id);

    vm.formatDate = function (date) {
      return date.format('D. MMMM YYYY');
    };

    vm.generate = function (tournament) {
      tournament.generateSchedule();
      tournament.setReady();
    };

    // code goes here...

  }


}());
