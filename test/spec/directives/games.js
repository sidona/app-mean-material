'use strict';

describe('Directive: games', function () {

  // load the directive's module
  beforeEach(module('appMeanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<games></games>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the games directive');
  }));
});
