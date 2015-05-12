/**
 * Table
 * @namespace tournament
 */
(function() {
  'use strict';

  /**
   * @memberOf tournament
   * @namespace table
   *
   * @description
   *
   * Route: /table
   */
  angular
    .module('tournament.table', [

    ])
    .config(StateConfig)
    .controller('htTournamentTableController', htTournamentTableController);


  /**
   * @memberOf tournament.table
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.TournamentTable', {
        url:           '/:id/table',
        session:       true,
        navigationKey: 'tournament',
        views:         {
          'content': {
            templateUrl:  'app/tournament/views/table.html',
            controller:   'htTournamentTableController',
            controllerAs: 'htTournamentTable'
          }
        }

      });
  }


  /**
   * @memberOf tournament.table
   * @name TournamentTableController
   */
  function htTournamentTableController($stateParams, htTournaments) {
    var vm = this;

    vm.tournament = htTournaments.get($stateParams.id);
    vm.table = vm.tournament.getTable();

    vm.refresh = function () {
      vm.table = vm.tournament.getTable();
    };

    vm.number = function (num) {
      num = num || 0;
      if(num === null){
        num = 0;
      }
      num =  parseInt(num, 10);

      if(_.isNaN(num)){
        num = 0;
      }

      return num;

    };

  }


}());
