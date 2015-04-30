/**
 * Login
 * @namespace login
 */
(function() {
  'use strict';

  /**
   * @memberOf login
   * @namespace login
   *
   * @description
   *
   * Route: /login
   */
  angular
    .module('login.login', [

    ])
    .config(StateConfig)
    .controller('htLoginController', htLoginController);


  /**
   * @memberOf login.login
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('public.login', {
        url:           '/login',
        session:       true,
        navigationKey: 'login',
        views:         {
          'content': {
            templateUrl:  'app/login/views/login.html',
            controller:   'htLoginController',
            controllerAs: 'htLogin'
          }
        }

      });
  }


  /**
   * @memberOf login.login
   * @name LoginLoginController
   */
  function htLoginController($state) {
    var vm = this;

    vm.form = {};
    vm.username = '';
    vm.password = '';
    vm.hasFailed = false;

    vm.signIn = signIn;

    ////////////////////////

    function signIn() {

      if(vm.username === 'mark' && vm.password === '1234'){
        vm.hasFailed = false;
        $state.go('admin.myTournamentsList');

      }else{
        vm.hasFailed = true;
        vm.username = '';
        vm.password = '';
      }

    }


  }


}());
