'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.dynamicPages', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('dynamic-pages', {
        url: 'dynamic-pages/',
        templateUrl: 'modules/dynamic-pages/list.html',
        controller: 'ListController'
      })
      .state('dynamic-pages.show', {
        url: ':pageSlug/',
        templateUrl: function ($stateParams) {
          return '/modules/dynamic-pages/views/' + $stateParams.pageSlug + '.html';
        },
        controllerProvider: ['controller', function (controller) {
          return controller;
        }],
        resolve: {
          controller: ['$stateParams', '$q', '$rootScope', function($stateParams, $q, $rootScope) {
            return $q(function(resolve, reject) {
              require(['modules/dynamic-pages/controllers/' + $stateParams.pageSlug], function() { 
                $rootScope.$apply(function() {
                  resolve($stateParams.pageSlug + 'Controller');
                });
              });
            });
          }]
        }
      })

  }])
  .controller('ListController', ['$scope', 'commonService', function($scope, commonService) {
    commonService.setTitle('Dynamic Pages');
    $scope.dynamicPages = ['simple', 'simple2', 'advanced']

  }]);
});