import mongoose from 'mongoose';
import model from '../core/model.js';

const taskTypesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  eng_name: {
    type: String
  },
  translation_key: {type: String, required: true}
}, {collection: 'task_types'});

const task_types = mongoose.model('task_types', taskTypesSchema);

export default model(task_types);
