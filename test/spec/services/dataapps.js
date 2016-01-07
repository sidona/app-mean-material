'use strict';

describe('Service: dataApps', function () {

  // load the service's module
  beforeEach(module('appMeanApp'));

  // instantiate service
  var dataApps;
  beforeEach(inject(function (_dataApps_) {
    dataApps = _dataApps_;
  }));

  it('should do something', function () {
    expect(!!dataApps).toBe(true);
  });

});
