/**
 * hotTrophy
 * @namespace app
 *
 * @description
 * Tournament app
 *
 * @author Gery Hirschfeld <gery.hirschfeld@w3tec.ch>
 * @date April, 2015
 * @version 0.0.0
 */
(function () {
  'use strict';

  angular
    .module('app', [

      // Config and core module
      'app.core',
      'app.config',
      'app.logger',
      'app.router',
      'app.run',

      // Layout components
      'layout',

      'common.service.htTournaments',

      // App modules with business logic
      'home',
      'login',
      'myTournaments'



    ]);

}());
