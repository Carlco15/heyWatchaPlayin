'use strict';

describe('Component: GamesComponent', function () {

  // load the controller's module
  beforeEach(module('heyWatchaPlayinApp'));

  var GamesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    GamesComponent = $componentController('GamesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
