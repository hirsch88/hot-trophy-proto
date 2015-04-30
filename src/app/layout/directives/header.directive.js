/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module('common.directive.header', [])
    .directive('htHeader', HeaderDirective);

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
      restrict:         'EA',
      templateUrl:      'app/layout/directives/header.directive.html',
      controller:       HeaderController,
      controllerAs:     'htHeader',
      link: link,
      bindToController: true // because the scope is isolated
    }
  }

  function link(scope, element, attrs) {
    scope.isAdmin = ( attrs.mode && attrs.mode === 'admin' );
  }

  /**
   * @memberOf layout.htHeader
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController($scope) {
    var vm = this;
    vm.title = AppUtil.title;

    vm.isAdminSection = function () {
      return $scope.isAdmin;
    }

  }

}());
