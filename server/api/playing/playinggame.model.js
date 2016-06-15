'use strict';

import mongoose from 'mongoose';

var PlayingGameSchema = new mongoose.Schema({
  game : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Game'
  },
  qty : Number
});

export default mongoose.model('PlayingGame', PlayingGameSchema);
