import mongoose from 'mongoose';
import model from '../core/model.js';
const standard_feature = new mongoose.Schema({
  conditioned: {
    type: Boolean
  },
  type: {
    type: String
  }
});
const standardsSchema = new mongoose.Schema({
  standard_type: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'standard_types'
  },
  name: {
    type: String,
    required: true
  },
  eng_name: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  translation_key: {
    type: String,
    required: true
  },
  file: {
    type: Boolean
  },
  property: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'standard_properties'
  },
  standard_feature: standard_feature
}, {collection: 'standards'});

export const standards = mongoose.model('standards', standardsSchema);

export default model(standards);
