import mongoose from 'mongoose';
import model from '../core/model.js';

const artifactPurposesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {type: String},
  translation_key: {type: String, required: true}
}, {collection: 'artifact_purposes'});

const artifact_purposes = mongoose.model('artifact_purposes', artifactPurposesSchema);

export default model(artifact_purposes);
