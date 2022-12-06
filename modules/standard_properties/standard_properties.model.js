import mongoose from 'mongoose';
import model from '../core/model.js';

const standardPropertiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translation_key: {
    type: String,
    required: true
  }
}, {collection: 'standard_properties'});

export const standard_properties = mongoose.model('standard_properties', standardPropertiesSchema);

export default model(standard_properties);
