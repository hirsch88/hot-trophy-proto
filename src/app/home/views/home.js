/**
 * @memberOf home
 * @namespace home
 *
 * @description
 * Startview
 */
(function () {
  'use strict';

  angular
    .module('home.home', [])
    .config(StateConfig)
    .controller('htHomeController', htHomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        header:        {
          signIn:           true,
          profile:          true,
          myTournaments:    true,
          createTournament: false
        },
        views:         {
          'content': {
            templateUrl:  'app/home/views/home.html',
            controller:   'htHomeController',
            controllerAs: 'htHome'
          }
        }

      });
  }

  /**
   * @memberOf home.home
   * @name htHomeController
   *
   * @param members {Object}
   * @constructor
   */
  function htHomeController($state, $rootScope) {
    var vm = this;
    vm.title = AppUtil.title;

    vm.registerForm = {};

    vm.username = '';
    vm.email = '';
    vm.password = '';

    vm.register = register;

    $rootScope.thereWasARegistration = false;

    ///////////////////////////////

    function register() {
      $rootScope.thereWasARegistration = true;
      $state.go('public.login');

    }


  }

}());
