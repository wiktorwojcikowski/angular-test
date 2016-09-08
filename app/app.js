'use strict';

define([
  'angular',
  'angularUiRouter',
  'angularMaterial',
  'angularMaterialIcons',
], function(angular, angularUiRouter, angularMaterial, angularMaterialIcons) {

  return angular
    .module('testAngular', [
      'ui.router',
      'ngAnimate', 
      'ngMessages', 
      'ngAria', 
      'ngMaterial',
      'ngMdIcons',
    ])
    .config(['$urlRouterProvider', '$mdThemingProvider', function($urlRouterProvider, $mdThemingProvider) {
      //$urlRouterProvider.otherwise({redirectTo: '/'});

      $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('cyan');

    }])
    .controller('MainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
      $scope.toggleSidenav = function() {
        $mdSidenav('left').toggle();
      };
    }])
    ;
});