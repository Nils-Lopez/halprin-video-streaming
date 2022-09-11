import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
  favMedia: {
    type: [String],
    default: [],
  },
  seenMedia: {
    type: [String],
    default: [],
  },
  lang: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model('User', user);
