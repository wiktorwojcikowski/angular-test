'use strict';

define([
  'angular',
  'angularUiRouter',
  'angularMaterial',
  'angularMaterialIcons',
  'modules/dynamic-pages/dynamic-pages',
//  'modules/dynamic-pages/controllers/simple',
], function(angular, angularUiRouter, angularMaterial, angularMaterialIcons, dynamicPages, simple) {

  var app = angular
    .module('testAngular', [
      'ui.router',
      'ngAnimate', 
      'ngMessages', 
      'ngAria', 
      'ngMaterial',
      'ngMdIcons',
      'testAngular.dynamicPages'
    ])
  app
    .config(['$urlRouterProvider', '$mdThemingProvider', '$controllerProvider', function($urlRouterProvider, $mdThemingProvider, $controllerProvider) {
      //$urlRouterProvider
      //  .otherwise('dynamic-pages/');

      $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('red');

      app.controller = $controllerProvider.register;

    }])
    .controller('MainController', ['$scope', '$mdSidenav', 'commonService', function($scope, $mdSidenav, commonService) {
      $scope.toggleSidenav = function() {
        $mdSidenav('left').toggle();
      };
      $scope.common = commonService.getCommon();
    }])
    .service('commonService', [function() {
      var commonData = {};
      this.setTitle = function(title) {
        return commonData.title = title;
      }
      this.getCommon = function() {
        return commonData;
      }
    }]);
  return app;
});