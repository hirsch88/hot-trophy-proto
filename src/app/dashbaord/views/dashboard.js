/**
 * Dashboard
 * @namespace dashbaord
 */
(function() {
  'use strict';

  /**
   * @memberOf dashbaord
   * @namespace dashboard
   *
   * @description
   * 
   * Route: /dashboard
   */
  angular
    .module('dashbaord.dashboard', [
      
    ])
    .config(StateConfig)
    .controller('htDashbaordDashboardController', htDashbaordDashboardController);


  /**
   * @memberOf dashbaord.dashboard
   * @name RouteConfig
   */
  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.DashbaordDashboard', {
        url:           '/dashboard',
        session:       true,
        navigationKey: 'dashbaord',
        views:         {
          'content': {
            templateUrl:  'app/dashbaord/views/dashboard.html',
            controller:   'htDashbaordDashboardController',
            controllerAs: 'htDashbaordDashboard'
          }
        }

      });
  }


  /**
   * @memberOf dashbaord.dashboard
   * @name DashbaordDashboardController
   */
  function htDashbaordDashboardController() {
    var vm = this;

    // code goes here...

  }


}());
