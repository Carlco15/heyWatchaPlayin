'use strict';

describe('Service: gameService', function () {

  // load the service's module
  beforeEach(module('heyWatchaPlayinApp'));

  // instantiate service
  var gameService;
  beforeEach(inject(function (_gameService_) {
    gameService = _gameService_;
  }));

  it('should do something', function () {
    expect(!!gameService).to.be.true;
  });

});
