'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
  .controller('UserCtrl', function ($scope, $rootScope, $http, activeNav) {
    $scope.user = {};
    $rootScope.activeNav = activeNav;
    $scope.login = function() {
      /* jshint sub: true */
      $scope.user['form_id'] = 'user_login_form';
      $http({
        method: 'POST',
        url: 'http://drupal8/user/login',
        data: $scope.user,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .success(function(user) {
        console.log(user);
      })
      .error(function(error) {
        console.log(error);
      });
    };
  });
