'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('drupalAngularApp'));

  var MoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesCtrl = $controller('MoviesCtrl', {
      $scope: scope
    });
  }));
});
