'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('MainCtrl', function ($rootScope) {
    $rootScope.activeNav = 'home';
  });
