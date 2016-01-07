'use strict';

describe('Controller: FamilyCtrl', function () {

  // load the controller's module
  beforeEach(module('appMeanApp'));

  var FamilyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FamilyCtrl = $controller('FamilyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FamilyCtrl.awesomeThings.length).toBe(3);
  });
});
