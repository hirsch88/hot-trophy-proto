/**
 * hot-trophy
 * @namespace app
 *
 * @description
 * Tournament Generator
 *
 * @author Gery Hirschfeld <gery.hirschfeld@w3tec.ch>
 * @date March, 2015
 * @version 0.0.0
 *
 * http://www.odindesign-themes.com/
 * http://www.odindesign-themes.com/theBebop/anime/
 * http://www.odindesign-themes.com/theBebop/comic/
 * http://themeforest.net/theme_previews/6668621-greenleaf-one-page-web-blog-psd-template?index=1&url_name=greenleaf-one-page-web-blog-psd-template
 *
 * http://tympanus.net/Development/CreativeButtons/
 * http://tympanus.net/Development/ProgressButtonStyles/
 * http://www.spiralpixelthemes.co.uk/flatinew/flati/index.html
 * http://themeforest.net/item/classter-multipurpose-wordpress-theme/full_screen_preview/10300637
 *
 */
(function () {
  'use strict';

  angular
    .module('app', [

      // Config and core module
      'app.util',
      'app.core',
      'app.config',

      // Layout components
      'layout',

      //'common.service.member',

      // App modules with business logic
      'home'


    ]);

}());
