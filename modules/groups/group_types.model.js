import mongoose from 'mongoose';
import model from '../core/model.js';

const groupTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  description: {
    type: String
  },
  translation_key: {
    type: String,
    required: true
  }
}, {collection: 'group_types', timestamps: true});

const group_types = mongoose.model('group_types', groupTypesSchema);

export default model(group_types);
