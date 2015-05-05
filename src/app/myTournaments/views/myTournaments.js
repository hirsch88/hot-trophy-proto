/**
 * MyTournamentsList
 * @namespace myTournaments
 */
(function() {
  'use strict';

  /**
   * @memberOf myTournaments
   * @namespace myTournamentsList
   *
   * @description
   *
   * Route: /tournaments
   */
  angular
    .module('myTournaments.list', [

    ])
    .config(StateConfig)
    .controller('htMyTournamentsController', htMyTournamentsController);


  /**
   * @memberOf myTournaments.myTournamentsList
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.myTournaments', {
        url:           '/tournaments',
        session:       true,
        navigationKey: 'myTournaments',
        header:        {
          signIn:        false,
          profile:       true,
          myTournaments: true
        },
        views:         {
          'content': {
            templateUrl:  'app/myTournaments/views/myTournaments.html',
            controller:   'htMyTournamentsController',
            controllerAs: 'htMyTournaments'
          }
        }

      });
  }


  /**
   * @memberOf myTournaments.myTournamentsList
   * @name MyTournamentsMyTournamentsListController
   */
  function htMyTournamentsController(htTournaments) {
    var vm = this;
    vm.list = htTournaments.getAll();

    ////////////////////////////////////////////////////

  }


}());
