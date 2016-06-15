'use strict';
(function(){

class GamesComponent {
  constructor($state, gameService, playingService) {
    this.$state = $state;
    this.gameService = gameService;
    this.playingService = playingService;
    this.searchText = '';
    this.playing = [];

    // Load playing data from server
    this.playingService.getPlaying().then((json) => {
      this.updatePlayingFromServer(json.data);
    });

    // load inventory games from server
    this.getInventory();
  }

  find(playing, game) {
    var len = playing.length;
    for (var i = 0; i < len; i++) {
      if (playing[i]._id === game._id) {
        return playing[i];
      }
    }
    return null;
  }

  // diff the playingFromServer with our current playing and make the incremental modifications
  // doing it this way makes our animation work.
  updatePlayingFromServer(playingFromServer) {
    // add playingGames in playingFromServer not found in this.playing
    var len = playingFromServer.length;
    var playingGame;
    for (var i = 0; i < len; i++) {
      playingGame = playingFromServer[i];
      if (!this.find(this.playing, playingGame)) {
        this.playing.splice(i, 0, playingGame);
      }
    }

    // check for remove or update
    i = this.playing.length;
    while (i--) {
      playingGame = this.playing[i];
      // remove playingGames in this.playing not found in playingFromServer
      var found = this.find(playingFromServer, playingGame);
      if (!found) {
        this.playing.splice(i, 1);
      }
      // update playingGames in this.playing this have a different qty in playingFromServer
      else if (playingGame.qty !== found.qty) {
        playingGame.qty = found.qty;
      }
    }
  }

  getInventory() {
    this.gameService.getGames().then((json) => {
      this.inventory = json.data;
    });
  }

  addGame(game) {
    this.playingService.addGame(game).then((json) => {
      this.updatePlayingFromServer(json.data);
    }, function(err) {
      console.log('ERROR: addGame: ' + JSON.stringify(err));
    });
  }

  removeGame(game) {
    this.playingService.removeGame(game).then((json) => {
      this.updatePlayingFromServer(json.data);
    }, function(err) {
      console.log('ERROR: removeGame: ' + JSON.stringify(err));
    });
  }

  getCost(game) {
    return this.playingService.getCost(game);
  }

  clearPlaying() {
    return this.playingService.clearPlaying().then((json) => {
      this.updatePlayingFromServer(json.data);
    }, function(err) {
      console.log('clearPlaying delete ERROR: ' + JSON.stringify(err));
    });
  }

  goGame(game) {
    this.$state.go('gameDetail', {
      gameId: game._id
    });
  }

  getTotal() {
    return this.playingService.getTotal(this.playing);
  }
}

angular.module('gaCampingStoreApp')
  .component('games', {
    templateUrl: 'app/games/games.html',
    controller: GamesComponent
  });

})();

