'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var playingCtrlStub = {
  index: 'playingCtrl.index',
  show: 'playingCtrl.show',
  create: 'playingCtrl.create',
  update: 'playingCtrl.update',
  destroy: 'playingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var playingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './playing.controller': playingCtrlStub
});

describe('Playing API Router:', function() {

  it('should return an express router instance', function() {
    expect(playingIndex).to.equal(routerStub);
  });

  describe('GET /api/users/:userId/playing', function() {

    it('should route to playing.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'playingCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/users/:userId/playing/:id', function() {

    it('should route to playing.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'playingCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/users/:userId/playing', function() {

    it('should route to playing.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'playingCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/users/:userId/playing/:id', function() {

    it('should route to playing.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'playingCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/users/:userId/playing/:id', function() {

    it('should route to playing.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'playingCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/users/:userId/playing/:id', function() {

    it('should route to playing.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'playingCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
