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
  admin_experiment:{type: Boolean,required: true, default: false},
  corresponding_autor: {type: Boolean, required: true, default: false},
}, {collection: 'experimenters',timestamps: true});

export const experimenters = mongoose.model('experimenters', experimentersSchema);

export default model(experimenters);
