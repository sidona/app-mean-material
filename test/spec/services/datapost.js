'use strict';

describe('Service: dataPost', function () {

  // load the service's module
  beforeEach(module('appMeanApp'));

  // instantiate service
  var dataPost;
  beforeEach(inject(function (_dataPost_) {
    dataPost = _dataPost_;
  }));

  it('should do something', function () {
    expect(!!dataPost).toBe(true);
  });

});
