import mongoose from 'mongoose';
import model from '../core/model.js';

const groupsSchema = new mongoose.Schema({
  numParticipants: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  experiment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experiments',
    required: true
  },
  group_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group_types',
    required: true
  }
}, {collection: 'groups', timestamps: true});

const groups = mongoose.model('groups', groupsSchema);

export default model(groups);
