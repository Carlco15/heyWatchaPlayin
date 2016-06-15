'use strict';

angular.module('heyWatchaPlayinApp')
  .service('playingService', function ($http, Auth) {

    var that = this;

    that.getPlaying = function() {
      var userId = Auth.getCurrentUser()._id;
      return $http.get('/api/users/' + userId + '/playing/');
    };

    that.addGame = function(game) {
      var userId = Auth.getCurrentUser()._id;
      return $http.post('/api/users/' + userId + '/playing/' + game._id);
    };

    that.removeGame = function(playingGame) {
      var userId = Auth.getCurrentUser()._id;
      return $http.delete('/api/users/' + userId + '/playing/' + playingGame._id);
    };

    that.getCost = function(playingGame) {
      return playingGame.qty * playingGame.game.price;
    };

    that.getTotal = function(playing) {
      var total = _.reduce(playing, function(sum, playingGame) {
        return sum + that.getCost(playingGame);
      }, 0);
      return total;
    };

    that.clearPlaying = function() {
      var userId = Auth.getCurrentUser()._id;
      return $http.delete('/api/users/' + userId + '/playing/');
    };
  });
