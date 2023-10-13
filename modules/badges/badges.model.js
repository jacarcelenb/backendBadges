import mongoose from 'mongoose';
import model from '../core/model.js';

const badgesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {type: String},
  eng_description: {type: String},
  description: {type: String},
  eng_instructions: {type: String},
  instructions: {type: String},
  image: {type: String, required: true},
  translation_key: {type: String, required: true},
  standards: [{type: mongoose.Schema.Types.ObjectId, ref: 'standards'}]
}, {collection: 'badges'});

const badges = mongoose.model('badges', badgesSchema);

export default model(badges);
