/**
 * Status
 * @namespace tournament
 */
(function () {
  'use strict';

  angular
    .module('tournament.directive.htTournamentStatus', [])
    .directive('htTournamentStatus', htTournamentStatusDirective);

  /**
   * @memberOf tournament
   * @namespace tournament.directive.htTournamentStatus
   *
   * @description
   *
   *
   * @example <ht-tournament-status></ht-tournament-status>
   */
  function htTournamentStatusDirective() {
    return {
      restrict:    'E',
      scope:       {
        status: '='
      },
      templateUrl: 'app/tournament/common/directives/htTournamentStatus.directive.html',
      link:        TournamentStatusLink

    };

    function TournamentStatusLink(scope, element, attrs) {


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
