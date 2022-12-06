import mongoose from 'mongoose';
import model from '../core/model.js';

const artifactOrderSchema = new mongoose.Schema({
  name: {type: String, required: true},
  translation_key: {type: String, required: true}
}, {collection: 'artifacts_order'});

const artifact_order = mongoose.model('artifacts_order', artifactOrderSchema);

export default model(artifact_order);