import mongoose from 'mongoose';
import model from '../core/model.js';

const evaluationsSchema = new mongoose.Schema({
  status: {type: String, required: true, enum: ['success', 'fail', 'pending'], default: 'pending'},
  experiment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experiments'
  },
  standard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'standards'
  }
}, {collection: 'evaluations'});

const evaluations = mongoose.model('evaluations', evaluationsSchema);


export default model(evaluations);
