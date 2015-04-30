(function () {
  'use strict';

  /**
   * @memberOf layout
   * @namespace layout.admin
   *
   */
  angular
    .module('layout.admin', [])
    .config(StateConfig);


  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        session: true,
        views:   {
          'root': {
            url:         '/admin',
            templateUrl: 'app/layout/views/admin.html'
          }
        }

      });
  }


}());
