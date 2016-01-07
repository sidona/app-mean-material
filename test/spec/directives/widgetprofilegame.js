'use strict';

describe('Directive: widgetProfileGame', function () {

  // load the directive's module
  beforeEach(module('appMeanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<widget-profile-game></widget-profile-game>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the widgetProfileGame directive');
  }));
});
