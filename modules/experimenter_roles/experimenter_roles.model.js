import mongoose from 'mongoose';
import model from '../core/model.js';

const experimenterRolesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  eng_name: {
    type: String
  },
  translation_key: {
    type: String
  }
}, {collection: 'experimenter_roles'});

export const experimenter_roles = mongoose.model('experimenter_roles', experimenterRolesSchema);

export default model(experimenter_roles);
