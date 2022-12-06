import mongoose from 'mongoose';
import model from '../core/model.js';

const experimentersSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  },
  experimenter_roles: {
    type: [mongoose.Types.ObjectId],
    ref: 'experimenter_roles'
  },
  experiment: {
    type: mongoose.Types.ObjectId,
    ref: 'experiments'
  },
  corresponding_autor: {type: Boolean, required: true, default: false},
}, {collection: 'experimenters'});

export const experimenters = mongoose.model('experimenters', experimentersSchema);

export default model(experimenters);
