'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.directiveExamples', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('directive-examples', {
        url: 'directive-examples/',
        templateUrl: 'modules/directive-examples/examples.html',
        controller: 'ExamplesController'
      })
  }])
  .controller('ExamplesController', ['$scope', 'commonService', function($scope, commonService) {
    commonService.setTitle('Examples - directives');


  }])
});