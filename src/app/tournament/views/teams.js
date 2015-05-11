/**
 * Teams
 * @namespace tournament
 */
(function () {
  'use strict';

  /**
   * @memberOf tournament
   * @namespace teams
   *
   * @description
   *
   * Route: /teams
   */
  angular
    .module('tournament.teams', [])
    .config(StateConfig)
    .controller('htTournamentTeamsController', htTournamentTeamsController);


  /**
   * @memberOf tournament.teams
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.tournamentTeams', {
        url:           '/:id/teams',
        session:       true,
        navigationKey: 'tournament',
        header:        {
          signIn:           false,
          profile:          true,
          myTournaments:    true,
          createTournament: false
        },
        views:         {
          'content': {
            templateUrl:  'app/tournament/views/teams.html',
            controller:   'htTournamentTeamsController',
            controllerAs: 'htTournamentTeams'
          }
        }

      });
  }


  /**
   * @memberOf tournament.teams
   * @name TournamentTeamsController
   */
  function htTournamentTeamsController($stateParams, htTournaments) {
    var vm = this;

    vm.tournament = htTournaments.get($stateParams.id);

    vm.form = {};
    vm.createRowIsOpen = false;
    vm.addedTeamName = '';
    vm.teamToDelete = undefined;
    vm.msgDelete = false;

    vm.formatDate = function (date) {
      return date.format('D. MMMM YYYY');
    };

    vm.save = function () {
      vm.msgDelete = false;
      vm.tournament.setTeam({
        icon:    vm.icon,
        name:    vm.name,
        captain: vm.captain,
        date:    moment()
      });
      vm.createRowIsOpen = false;
      vm.addedTeamName = vm.name;
      vm.cancel();
    };

    vm.cancel = function () {
      vm.msgDelete = false;
      vm.createRowIsOpen = false;
      vm.icon = '';
      vm.name = '';
      vm.captain = '';
      vm.date = vm.formatDate(moment());
      vm.form.$setPristine();
    };

    vm.openDeleteConf = function (team) {
      vm.msgDelete = false;
      vm.teamToDelete = team;
      $('#myModal').modal();
      $('#myModal').show();
    };


    vm.delete = function () {
      vm.tournament.removeTeam(vm.teamToDelete);
      vm.teamToDelete = undefined;
      vm.msgDelete = true;
    };


    vm.icon = '';
    vm.name = '';
    vm.captain = '';
    vm.date = vm.formatDate(moment());


    // code goes here...

  }


}());
