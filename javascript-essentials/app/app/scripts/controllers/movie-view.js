'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('MovieViewCtrl', function ($scope, $rootScope, $routeParams, $http) {
    $scope.movie = {};
    $http.get($rootScope.baseUrl + '/movie/' + $routeParams.id).success(function(result) {
      $scope.movie = result[0];
    });
  });
