/**
 * Status
 * @namespace myTournaments
 */
(function() {
  'use strict';

  angular
    .module('myTournaments.directive.htMyTournamentsStatus', [

    ])
    .directive( 'htMyTournamentsStatus', htMyTournamentsStatusDirective );

  /**
   * @memberOf myTournaments
   * @namespace myTournaments.directive.htMyTournamentsStatus
   *
   * @description
   *
   *
   * @example <ht-myTournaments-status></ht-myTournaments-status>
   */
  function htMyTournamentsStatusDirective() {
    return {
      restrict:         'E',
      scope:{
        status: '='
      },
      templateUrl:      'app/myTournaments/common/directives/htMyTournamentsStatus.directive.html',
      link:             myTournamentsStatusLink

    };

    function myTournamentsStatusLink(scope, element, attrs) {


      var classes = [
        'label-info',
        'label-primary',
        'label-success',
        'label-default'
      ];
      scope.getClass = function () {
        return classes[scope.status];
      };


      var names = [
        'Open',
        'Ready',
        'Active',
        'Archive'
      ];
      scope.getName = function () {
        return names[scope.status];
      };


    }
  }



}());
