'use strict';

define([
  'angular',
  'app.module',
], function(angular, testAngular) {

  angular.module('testAngular')
    .directive('phone', [function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/phone/phone.html',
        controller: ['$scope', function($scope) {
          
        }]
      }
    }])

});