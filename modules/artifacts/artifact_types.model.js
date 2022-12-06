import mongoose from 'mongoose';
import model from '../core/model.js';

const artifactTypesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {type: String},
  translation_key: {type: String, required: true}
}, {collection: 'artifact_types'});

const artifact_types = mongoose.model('artifact_types', artifactTypesSchema);

export default model(artifact_types);
