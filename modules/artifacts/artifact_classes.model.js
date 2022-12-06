import mongoose from 'mongoose';
import model from '../core/model.js';

const artifactClassesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {type: String},
  translation_key: {type: String, required: true}
}, {collection: 'artifact_classes'});

const artifact_classes = mongoose.model('artifact_classes', artifactClassesSchema);

export default model(artifact_classes);
