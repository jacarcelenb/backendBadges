import mongoose from 'mongoose';
import model from '../core/model.js';

const standardTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translation_key: {
    type: String,
    required: true
  }
}, {collection: 'standard_types'});

export const standard_types = mongoose.model('standard_types', standardTypesSchema);

export default model(standard_types);
