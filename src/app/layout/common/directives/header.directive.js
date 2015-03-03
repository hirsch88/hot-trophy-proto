/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module( 'common.directive.header', [] )
    .directive( 'htHeader', HeaderDirective );

  /**
   * @memberOf layout
   * @namespace htHeader
   *
   * @description
   * Header element outside of the ngView area
   *
   * @example
   * <ht-header></ht-header>
   *
   * @constructor
   */
  function HeaderDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'app/layout/common/directives/header.directive.html',
      controller: HeaderController,
      controllerAs: 'header',
      bindToController: true // because the scope is isolated
    }
  }

  /**
   * @memberOf layout.htHeader
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController(appUtil) {
    var vm = this;
    vm.title = appUtil.title;
  }

}());
