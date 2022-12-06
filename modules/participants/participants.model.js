import mongoose from 'mongoose';
import model from '../core/model.js';

const participantsSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
    default: 1
  },
  avatar: {
    type: String,
    required: false,
    default: ''
  },
  comment: {
    type: String,
    required: false
  },
  experiment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experiments',
    required: true
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'groups',
    required: true
  }
}, {collection: 'participants', timestamps: true});

const participants = mongoose.model('participants', participantsSchema);

export default model(participants);
