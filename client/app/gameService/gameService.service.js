'use strict';

angular.module('heyWatchaPlayin')
  .service('gameService', function($http) {

    var svc = this;

    svc.findGameById = function(id) {
      return $http.get('/api/games/' + id);
    };

    svc.getGames = function() {
      return $http.get('/api/games');
   };
  });
