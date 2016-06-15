/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users/:userId/playing              ->  index
 * POST    /api/users/:userId/playing              ->  create
 * GET     /api/users/:userId/playing/:id          ->  show
 * PUT     /api/users/:userId/playing/:id          ->  update
 * DELETE  /api/users/:userId/playing/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import PlayingGame from './playinggame.model';
import Game from '../game/game.model';
import User from '../user/user.model';

function findGameInPlaying(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.playing, function(playingGame) {
    // return playingGame.game === id;    // does not work!
    console.log('Comparing ' + playingGame.game + ' to ' + id);
    return playingGame.game.equals(id) || playingGame._id.equals(id);
  });
}

// Get the playing from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('playing.game')
  .exec(function(err, user) {
    console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning playing: ' + JSON.stringify(user.playing));
    res.json(200, user.playing);
  });
};

// Add a new game to the playing or update the qty and return the playing.
exports.addGame = function(req, res) {
  console.log('addGame, url = ' + req.url);
  var userId = req.params.userid.trim();
  var gameId = req.params.gameid.trim();
  console.log('userId: ' + userId + ', gameId: ' + gameId);

  Game.findById(gameId, function(err, game) {
    if (err) { return handleError(res, err); }
    if (!game) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if game is already in playing
      var found = findGameInPlaying(user, game._id);
      if (found) {
        console.log('Found game ' + game.name + ' in playing, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding game to playing: ' + game.name);
        user.playing.push( new PlayingGame( { game: game, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('playing.game', function(err, user) {
          return res.json(201, user.playing );
        });
      });
    });
  });
};

// Remove an game from the playing and return the playing.
exports.removeGame = function(req, res) {
  console.log('removeGame, url = ' + req.url);
  var userId = req.params.userid;
  var playingGameId = req.params.gameid;
  console.log('userId: ' + userId + ', playingGameId: ' + playingGameId);

  // Remove the game, get the updated playing, and return the playing
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if game is already in playing
    var found = findGameInPlaying(user, playingGameId);
    if (found) {
      console.log('Removing game from playing');
      user.playing.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('playing.game', function(err, user) {
        return res.json(201, user.playing );
      });
    });
  });
};

// Remove all games from the playing in the DB.
exports.removeAllGames = function(req, res) {
  console.log('removeAllGames, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all games from playing and return the playing
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.playing = [];
    user.save(function() {
      user.populate('playing.game', function(err, user) {
        return res.send(204, user.playing);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
