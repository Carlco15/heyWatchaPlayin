/**
 * Playing model events
 */

'use strict';

import {EventEmitter} from 'events';
import PlayingGame from './playinggame.model';
var PlayingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PlayingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  PlayingGame.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PlayingEvents.emit(event + ':' + doc._id, doc);
    PlayingEvents.emit(event, doc);
  }
}

export default PlayingEvents;
