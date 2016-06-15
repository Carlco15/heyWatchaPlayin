'use strict';

describe('Service: playingService', function () {

  // load the service's module
  beforeEach(module('heyWatchaPlayinApp'));

  // instantiate service
  var playingService;
  beforeEach(inject(function (_playingService_) {
    playingService = _playingService_;
  }));

  it('should do something', function () {
    expect(!!playingService).to.be.true;
  });

});
