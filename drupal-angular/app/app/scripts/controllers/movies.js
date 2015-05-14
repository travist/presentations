'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('MoviesCtrl', function ($scope, $rootScope, $http) {
    $rootScope.activeNav = 'movies';
    $scope.movies = [];
    $http.get($rootScope.baseUrl + '/movie').success(function(result) {
      console.log(result);
      $scope.movies = result;
    });
  });
