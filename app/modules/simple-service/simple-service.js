'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.simpleService', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('simple-service-form', {
        url: 'simple-service-form/',
        templateUrl: 'modules/simple-service/form.html',
        controller: 'FormController'
      })
      .state('simple-service-value', {
        url: 'simple-service-value/',
        templateUrl: 'modules/simple-service/value.html',
        controller: 'ValueController'
      })
  }])
  .service('simpleService', [function() {
    var value = '';
    this.setValue = function(v) {
      value = v;
    }
    this.getValue = function() {
      return value;
    }
  }])
  .controller('FormController', ['$scope', 'simpleService', 'commonService', function($scope, simpleService, commonService) {
    commonService.setTitle('Simple Service - Set value');

    $scope.value = simpleService.getValue();
    $scope.saved = false;

    $scope.save = function() {
      simpleService.setValue($scope.value);
      $scope.saved = true;
    }

  }])
  .controller('ValueController', ['$scope', 'simpleService', 'commonService', function($scope, simpleService, commonService) {
    commonService.setTitle('Simple Service - Preview value');

    $scope.value = simpleService.getValue();

  }]);
});