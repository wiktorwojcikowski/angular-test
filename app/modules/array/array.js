'use strict';

define([
  'angular'
], function(angular) {

  angular.module('testAngular.array', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('array', {
        url: 'array/',
        templateUrl: 'modules/array/table.html',
        controller: 'ArrayController'
      })
  }])
  .controller('ArrayController', ['$scope', 'commonService', 'data', function($scope,commonService, data) {
    commonService.setTitle('Array - Sort and filter');
    $scope.data = [];
    $scope.sortCol = 'first';
    $scope.sortType = 'asc';
    $scope.q = '';

    var sort = function() {
      $scope.data.sort(function(a, b) { 
        if(a[$scope.sortCol] < b[$scope.sortCol])
          return -1;
        if(a[$scope.sortCol] > b[$scope.sortCol])
          return 1;
        return 0;
      });
      if ($scope.sortType == 'desc') {
        $scope.data.reverse();
      }
    }

    $scope.sortBy = function(column) {
      if ($scope.sortCol == column && $scope.sortType == 'asc') {
        $scope.sortType = 'desc';
      } else {
        $scope.sortCol = column;
        $scope.sortType = 'asc';
      }
      sort();
    };
    $scope.filter = function() {
      $scope.data = data.filter(function (item) {
        var re = new RegExp($scope.q, "i");
        return re.test(item.first) || re.test(item.last) || re.test(item.age.toString());
      });
      sort();
    };

    $scope.filter();

  }])
  .controller('ValueController', ['$scope', 'simpleService', 'commonService', function($scope, simpleService, commonService) {
    commonService.setTitle('Simple Service - Preview value');

    $scope.value = simpleService.getValue();

  }])
  .constant('data', [
    {
      "first": "Goodwin",
      "last": "Castillo",
      "age": 35
    },
    {
      "first": "Brooks",
      "last": "Herrera",
      "age": 40
    },
    {
      "first": "Morris",
      "last": "Chan",
      "age": 25
    },
    {
      "first": "Douglas",
      "last": "Sheppard",
      "age": 37
    },
    {
      "first": "Rowland",
      "last": "Church",
      "age": 39
    },
    {
      "first": "Deana",
      "last": "Odom",
      "age": 27
    },
    {
      "first": "Lott",
      "last": "Kelly",
      "age": 23
    },
    {
      "first": "Eliza",
      "last": "Bentley",
      "age": 35
    },
    {
      "first": "Compton",
      "last": "Rice",
      "age": 37
    },
    {
      "first": "Benjamin",
      "last": "Gilmore",
      "age": 35
    },
    {
      "first": "Elsa",
      "last": "Lynn",
      "age": 37
    },
    {
      "first": "Miles",
      "last": "Bridges",
      "age": 40
    },
    {
      "first": "Nita",
      "last": "Guy",
      "age": 25
    },
    {
      "first": "Shields",
      "last": "Bush",
      "age": 28
    },
    {
      "first": "Petra",
      "last": "Aguirre",
      "age": 39
    },
    {
      "first": "Concepcion",
      "last": "Barron",
      "age": 39
    },
    {
      "first": "Madeleine",
      "last": "Bright",
      "age": 30
    },
    {
      "first": "Abigail",
      "last": "Burton",
      "age": 24
    },
    {
      "first": "Kemp",
      "last": "Mendez",
      "age": 26
    },
    {
      "first": "Frances",
      "last": "Cummings",
      "age": 35
    },
    {
      "first": "Cochran",
      "last": "Slater",
      "age": 24
    },
    {
      "first": "Fletcher",
      "last": "Griffin",
      "age": 36
    },
    {
      "first": "Cantu",
      "last": "Rich",
      "age": 23
    },
    {
      "first": "Norma",
      "last": "Stewart",
      "age": 32
    },
    {
      "first": "Tyson",
      "last": "Fleming",
      "age": 25
    },
    {
      "first": "Claudine",
      "last": "King",
      "age": 22
    },
    {
      "first": "Hinton",
      "last": "Pena",
      "age": 30
    },
    {
      "first": "Velazquez",
      "last": "Valentine",
      "age": 27
    },
    {
      "first": "Larsen",
      "last": "Richmond",
      "age": 39
    },
    {
      "first": "Kaufman",
      "last": "Kennedy",
      "age": 20
    },
    {
      "first": "Branch",
      "last": "Travis",
      "age": 37
    },
    {
      "first": "Hutchinson",
      "last": "Juarez",
      "age": 25
    },
    {
      "first": "Rollins",
      "last": "Moody",
      "age": 28
    },
    {
      "first": "Mae",
      "last": "Hess",
      "age": 20
    },
    {
      "first": "Ann",
      "last": "Mcdonald",
      "age": 23
    },
    {
      "first": "Terrell",
      "last": "Stein",
      "age": 20
    },
    {
      "first": "Latisha",
      "last": "Carver",
      "age": 26
    },
    {
      "first": "Russell",
      "last": "George",
      "age": 23
    },
    {
      "first": "Dollie",
      "last": "Pugh",
      "age": 35
    },
    {
      "first": "Lee",
      "last": "Case",
      "age": 30
    },
    {
      "first": "Casey",
      "last": "Jimenez",
      "age": 23
    },
    {
      "first": "Shanna",
      "last": "Wilkins",
      "age": 24
    },
    {
      "first": "Luann",
      "last": "Wallace",
      "age": 40
    },
    {
      "first": "Richmond",
      "last": "Alford",
      "age": 35
    },
    {
      "first": "Horton",
      "last": "Morris",
      "age": 24
    },
    {
      "first": "Huber",
      "last": "Henry",
      "age": 23
    },
    {
      "first": "Sawyer",
      "last": "Wilkinson",
      "age": 39
    },
    {
      "first": "Ester",
      "last": "Acevedo",
      "age": 26
    },
    {
      "first": "Maryanne",
      "last": "Benjamin",
      "age": 40
    },
    {
      "first": "Diane",
      "last": "Wade",
      "age": 24
    }
  ]);
});
