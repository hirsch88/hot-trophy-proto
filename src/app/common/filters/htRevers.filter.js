/**
 * Range
 * @namespace common
 */
(function () {
  'use strict';

  angular
    .module('common.filter.htRevers', [])
    .filter('htRevers', htReversFilter);

  /**
   * @memberOf common
   * @namespace common.filter.htRevers
   *
   * @description
   *
   */
  function htReversFilter() {

    return Filter;
    ////////////////////////

    function Filter(items) {
      return items.slice().reverse();
    }

  }


}());
