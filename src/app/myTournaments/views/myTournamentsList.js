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
    .controller('htMyTournamentsListController', htMyTournamentsListController);


  /**
   * @memberOf myTournaments.myTournamentsList
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.myTournamentsList', {
        url:           '/tournaments',
        session:       true,
        navigationKey: 'myTournaments',
        views:         {
          'content': {
            templateUrl:  'app/myTournaments/views/myTournamentsList.html',
            controller:   'htMyTournamentsListController',
            controllerAs: 'htMyTournamentsList'
          }
        }

      });
  }


  /**
   * @memberOf myTournaments.myTournamentsList
   * @name MyTournamentsMyTournamentsListController
   */
  function htMyTournamentsListController() {
    var vm = this;

    ////////////////////////////////////////////////////

  }


}());
