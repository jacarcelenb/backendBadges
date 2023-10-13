import mongoose from 'mongoose';
import model from '../core/model.js';

const standardsSchema = new mongoose.Schema({
  idbadge: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'badges'
  },
  experiment: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'experiments'
  },
  status: {
    type:Boolean,
  },

}, {collection: 'selected_standard'});

export const standards = mongoose.model('selected_standard', standardsSchema);

export default model(standards);