/**
 * MiniTable
 * @namespace myTournaments
 */
(function () {
  'use strict';

  angular
    .module('myTournaments.directive.htMyTournamentsMiniTable', [])
    .directive('htMyTournamentsMiniTable', htMyTournamentsMiniTableDirective);

  /**
   * @memberOf myTournaments
   * @namespace myTournaments.directive.htMyTournamentsMiniTable
   *
   * @description
   *
   *
   * @example <ht-myTournaments-miniTable></ht-myTournaments-miniTable>
   */
  function htMyTournamentsMiniTableDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/myTournaments/common/directives/htMyTournamentsMiniTable.directive.html',
      controller:       myTournamentsMiniTableController,
      controllerAs:     'myTournamentsMiniTable',
      bindToController: true

    };

  }

  function myTournamentsMiniTableController() {
    var vm = this;
    vm.table = vm.tournament.getTable();


  }


}());
