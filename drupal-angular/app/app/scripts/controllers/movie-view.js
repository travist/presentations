'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('MovieViewCtrl', function ($scope, $routeParams, Restangular) {
    $scope.movie = {};
    Restangular.one('movie', $routeParams.id).get()
    .then(function(result) {
      $scope.movie = result[0];
    });
  });
