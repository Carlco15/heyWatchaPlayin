'use strict';

import mongoose from 'mongoose';

var GameSchema = new mongoose.Schema({
  name:      String,
  client:    String,
  imageFile: String,
  playing:   Boolean,
  message:   String
});

export default mongoose.model('Game', GameSchema);
