/**
 * @memberOf app
 * @namespace app.config
 *
 * @description
 * 3rd Party Modules configurations
 */
(function () {
  'use strict';

  angular
    .module('app.config', [
      'pascalprecht.translate',
      'ui.bootstrap',
      'ui.bootstrap-slider'
    ])
    .config(TranslateConfig);

  /**
   * @memberOf app.config
   * @name TranslateConfig
   *
   * @description
   * This configs the transaltion module and sets the default language
   *
   * @constructor
   */
  function TranslateConfig($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

  }


}());
