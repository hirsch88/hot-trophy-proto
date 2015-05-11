/**
 * MiniTable
 * @namespace Tournament
 */
(function () {
  'use strict';

  angular
    .module('tournament.directive.htTournamentMiniTable', [])
    .directive('htTournamentMiniTable', htTournamentMiniTableDirective);

  /**
   * @memberOf Tournament
   * @namespace Tournament.directive.htTournamentMiniTable
   *
   * @description
   *
   *
   * @example <ht-Tournament-miniTable></ht-Tournament-miniTable>
   */
  function htTournamentMiniTableDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/Tournament/common/directives/htTournamentMiniTable.directive.html',
      controller:       TournamentMiniTableController,
      controllerAs:     'htTournamentMiniTable',
      bindToController: true

    };

  }

  function TournamentMiniTableController() {
    var vm = this;
    vm.table = vm.tournament.getTable();


  }


}());
