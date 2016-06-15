'use strict';

angular.module('heyWatchaPlayinApp')
  .filter('gameFilter', function() {
    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var games = {
        searchText: searchText,
        out: []
      };
      angular.forEach(inventory, function (game) {
        if (isMatch(game.category   , this.searchText) ||
            isMatch(game.name       , this.searchText) ||
            isMatch(game.description, this.searchText) ) {
          this.out.push(game);
        }
      }, games);
      return games.out;
    };
  });
