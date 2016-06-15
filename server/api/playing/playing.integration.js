'use strict';

var app = require('../..');
import request from 'supertest';

var newPlaying;

describe('Playing API:', function() {

  describe('GET /api/users/:userId/playing', function() {
    var playings;

    beforeEach(function(done) {
      request(app)
        .get('/api/users/:userId/playing')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(playings).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/users/:userId/playing', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/users/:userId/playing')
        .send({
          name: 'New Playing',
          info: 'This is the brand new playing!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPlaying = res.body;
          done();
        });
    });

    it('should respond with the newly created playing', function() {
      expect(newPlaying.name).to.equal('New Playing');
      expect(newPlaying.info).to.equal('This is the brand new playing!!!');
    });

  });

  describe('GET /api/users/:userId/playing/:id', function() {
    var playing;

    beforeEach(function(done) {
      request(app)
        .get('/api/users/:userId/playing/' + newPlaying._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playing = res.body;
          done();
        });
    });

    afterEach(function() {
      playing = {};
    });

    it('should respond with the requested playing', function() {
      expect(playing.name).to.equal('New Playing');
      expect(playing.info).to.equal('This is the brand new playing!!!');
    });

  });

  describe('PUT /api/users/:userId/playing/:id', function() {
    var updatedPlaying;

    beforeEach(function(done) {
      request(app)
        .put('/api/users/:userId/playing/' + newPlaying._id)
        .send({
          name: 'Updated Playing',
          info: 'This is the updated playing!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPlaying = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPlaying = {};
    });

    it('should respond with the updated playing', function() {
      expect(updatedPlaying.name).to.equal('Updated Playing');
      expect(updatedPlaying.info).to.equal('This is the updated playing!!!');
    });

  });

  describe('DELETE /api/users/:userId/playing/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/users/:userId/playing/' + newPlaying._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when playing does not exist', function(done) {
      request(app)
        .delete('/api/users/:userId/playing/' + newPlaying._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
