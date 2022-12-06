import mongoose from 'mongoose';
import model from '../core/model.js';

const userProfilesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eng_name: {
    type: String
  },
  translation_key: {
    type: String,
    required: true
  }
}, {collection: 'user_profiles'});

export const user_profiles = mongoose.model('user_profiles', userProfilesSchema);

export default model(user_profiles);
