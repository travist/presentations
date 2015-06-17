'use strict';

/**
 * @ngdoc overview
 * @name drupalAngularApp
 * @description
 * # drupalAngularApp
 *
 * Main module of the application.
 */
angular
  .module('drupalAngularApp', [
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/user/login', {
        templateUrl: 'views/user-login.html',
        controller: 'UserCtrl',
        resolve: {
          activeNav: function() {
            return 'login';
          }
        }
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope.baseUrl = 'http://drupal8';
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('safe', function($sce) {
    return function(html) {
      return $sce.trustAsHtml(html);
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
