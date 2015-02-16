'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('MoviesCtrl', function ($scope, $rootScope, Restangular) {
    $rootScope.activeNav = 'movies';
    $scope.movies = Restangular.all('movie').getList().$object;
  });
