'use strict';

describe('Controller: ProfilefriendsCtrl', function () {

  // load the controller's module
  beforeEach(module('appMeanApp'));

  var ProfilefriendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilefriendsCtrl = $controller('ProfilefriendsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfilefriendsCtrl.awesomeThings.length).toBe(3);
  });
});
