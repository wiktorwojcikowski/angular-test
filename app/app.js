'use strict';

define([
  'angular',
  'angularUiRouter',
  'angularMaterial',
  'angularMaterialIcons',
  'modules/dynamic-pages/dynamic-pages',
  'modules/simple-service/simple-service',
  'modules/array/array',
], function(angular, angularUiRouter, angularMaterial, angularMaterialIcons, dynamicPages, simpleService) {

  var app = angular
    .module('testAngular', [
      'ui.router',
      'ngAnimate', 
      'ngMessages', 
      'ngAria', 
      'ngMaterial',
      'ngMdIcons',
      'testAngular.dynamicPages',
      'testAngular.simpleService',
      'testAngular.array'
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