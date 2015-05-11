/**
 * Form
 * @namespace createNewTournament
 */
(function () {
  'use strict';

  /**
   * @memberOf createNewTournament
   * @namespace form
   *
   * @description
   *
   * Route: /create
   */
  angular
    .module('createNewTournament.form', [])
    .config(StateConfig)
    .controller('htCreateNewTournamentFormController', htCreateNewTournamentFormController);


  /**
   * @memberOf createNewTournament.form
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.CreateNewTournamentForm', {
        url:           '/create',
        session:       true,
        navigationKey: 'createNewTournament',
        header:        {
          signIn:           false,
          profile:          true,
          myTournaments:    true,
          createTournament: false
        },
        views:         {
          'content': {
            templateUrl:  'app/createNewTournament/views/form.html',
            controller:   'htCreateNewTournamentFormController',
            controllerAs: 'htCreateNewTournamentForm'
          }
        }

      });
  }


  /**
   * @memberOf createNewTournament.form
   * @name CreateNewTournamentFormController
   */
  function htCreateNewTournamentFormController($window, $state, htTournaments, $rootScope) {
    var vm = this;

    vm.date = new Date();
    vm.modus = 'Liga';
    $rootScope.thereWasATournamentCreation = false;

    vm.save = function () {
      htTournaments.add({
        name:        vm.name,
        description: vm.description,
        date:        vm.date,
        modus:       vm.modus,
        amount:      vm.amount
      });

      $rootScope.thereWasATournamentCreation = true;
      $state.go('admin.myTournaments');

    };

    vm.cancel = function () {
      $window.history.back();
    };


  }


}());
