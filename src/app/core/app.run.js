(function () {
  'use strict';

  angular
    .module('app.run', [])
    .run(AppRun);


  function AppRun($rootScope, logger, $state, $stateParams, $location, $window) {
    var log = logger('AppRun');

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.navigateBack = $window.history.back;

    $rootScope.signedInUser = false;

    $rootScope.isMaster = $location.search().user === 'Marc' || false;

    if ($rootScope.isMaster) {
      $rootScope.signedInUser = {
        username: 'Marc',
        password: '1234'
      };
    }

  }


}());
