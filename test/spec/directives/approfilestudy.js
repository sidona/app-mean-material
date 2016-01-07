'use strict';

describe('Directive: apProfileStudy', function () {

  // load the directive's module
  beforeEach(module('appMeanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ap-menu-profile-study></ap-menu-profile-study>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the apProfileStudy directive');
  }));
});
