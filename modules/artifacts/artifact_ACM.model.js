import mongoose from 'mongoose';
import model from '../core/model.js';

const artifactACMSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {type: String},
  maturity_level: {type: String},
  standard:  {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'standards'
  },
}, {collection: 'artifact_acm_types'});

const artifact_acm = mongoose.model('artifact_acm_types', artifactACMSchema);

export default model(artifact_acm);