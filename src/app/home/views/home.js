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
    .module('home.home',[

    ])
    .config(StateConfig)
    .controller('htHomeController', htHomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        header:        {
          signIn:        true,
          profile:       false,
          myTournaments: false
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
  function htHomeController($state) {
    var vm = this;
    vm.title = AppUtil.title;


    vm.username = '';
    vm.email = '';
    vm.password = '';

    vm.register = register;

    ///////////////////////////////

    function register() {
      $state.go('admin.myTournamentsList');
    }


  }

}());
