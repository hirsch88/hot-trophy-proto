/**
 * Tile
 * @namespace myTournaments
 */
(function () {
  'use strict';

  angular
    .module('myTournaments.directive.htMyTournamentsTile', [])
    .directive('htMyTournamentsTile', htMyTournamentsTileDirective);

  /**
   * @memberOf myTournaments
   * @namespace myTournaments.directive.htMyTournamentsTile
   *
   * @description
   *
   *
   * @example <ht-myTournaments-tile></ht-myTournaments-tile>
   */
  function htMyTournamentsTileDirective() {
    return {
      restrict:         'E',
      scope:            {
        tournament: '='
      },
      templateUrl:      'app/myTournaments/common/directives/htMyTournamentsTile.directive.html',
      controller:       myTournamentsTileController,
      controllerAs:     'myTournamentsTile',
      bindToController: true,
      link:             myTournamentsTileLink

    };

    function myTournamentsTileLink(scope, element, attrs) {
      console.log('myTournamentsTileLink', scope);

      // code will be here ...

    }
  }

  function myTournamentsTileController(EVENT_STATUS_OPEN, EVENT_STATUS_READY, EVENT_STATUS_ACTIVE,
                                       EVENT_STATUS_ARCHIVE) {

    var vm = this;
    console.log('myTournamentsTileController', this);

    vm.formatDate = function (date) {
      return date.format('D. MMMM YYYY');
    };

    vm.getDays = function (date) {
      return date.endOf('day').fromNow();
    };


    vm.classes = {
      'col-md-4':  vm.tournament.status !== EVENT_STATUS_ACTIVE,
      'col-md-8':  vm.tournament.status === EVENT_STATUS_ACTIVE,
      'col-sm-6':  vm.tournament.status !== EVENT_STATUS_ACTIVE,
      'col-sm-12': vm.tournament.status === EVENT_STATUS_ACTIVE
    };

  }


}());
